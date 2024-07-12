import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { apiUrl } from '@/config';
import axios from '@/utils/axios';
import { useAuth } from '@/providers/AuthProvider';


function Calculator() {

  const { authToken } = useAuth();

  const [operation, setOperation] = useState('add');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState(null);
  const [balance, setBalance] = useState(100); // Assume starting balance is 100

  useEffect(() => {

    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;

    axios.get(`${apiUrl}/users/balance`).then((response) => {
      setBalance(response.data);
    }).catch((error: any) => {
      alert('Error fetching user balance')
      console.error('Error fetching user:', error);
    })

  }, [])


  const handleOperationChange = (e: any) => {
    setOperation(e.target.value);
  };

  const handleValue1Change = (e: any) => {
    setValue1(e.target.value);
  };

  const handleValue2Change = (e: any) => {
    setValue2(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
      axios.post(`${apiUrl}/operations/${operation}`, {
        type: operation,
        a: parseFloat(value1),
        b: parseFloat(value2),
      }).then((response: any) => {
        console.log(response.data);
        setResult(operation == "randomString" ? response.data.operationResponse : response.data.amount);
        setBalance(response.data.userBalance); // Assume API returns new balance
      })
        .catch((error: any) => {
          alert('Error: ' + error?.message || 'Unknown error')
          console.error('Error performing operation:', error);
        });

    } catch (error) {
      console.error('Error performing operation:', error);
    }
  };

  return (
    <>
      <Meta title="Calculator" />
      <FullSizeCenteredFlexBox flexDirection="column">
        <Typography variant="h3">New Operation</Typography>
        <Typography variant="h6">Current Balance: ${balance.toFixed(2)}</Typography>

        <TextField
          label="Operation"
          value={operation}
          onChange={handleOperationChange}
          select
          SelectProps={{
            native: true,
          }}
          margin="normal"
          fullWidth
        >
          <option value="add">Addition</option>
          <option value="subtract">Subtraction</option>
          <option value="multiply">Multiplication</option>
          <option value="divide">Division</option>
          <option value="squareRoot">Square Root</option>
          <option value="randomString">Random String</option>
        </TextField>

        {operation !== 'randomString' &&
          <TextField
            label="Value 1"
            value={value1}
            onChange={handleValue1Change}
            margin="normal"
            fullWidth
          />
        }

        {operation !== 'squareRoot' && operation !== 'randomString' && (
          <TextField
            label="Value 2"
            value={value2}
            onChange={handleValue2Change}
            margin="normal"
            fullWidth
          />
        )}

        <Button onClick={handleSubmit} variant="contained" sx={{ mt: 4 }}>
          Calculate
        </Button>

        {result !== null && (
          <Typography variant="h5" sx={{ mt: 4 }}>
            Result: {result}
          </Typography>
        )}

      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Calculator;
