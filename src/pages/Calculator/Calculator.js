import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
        }).catch((error) => {
            alert('Error fetching user balance');
            console.error('Error fetching user:', error);
        });
    }, []);
    const handleOperationChange = (e) => {
        setOperation(e.target.value);
    };
    const handleValue1Change = (e) => {
        setValue1(e.target.value);
    };
    const handleValue2Change = (e) => {
        setValue2(e.target.value);
    };
    const handleSubmit = async () => {
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
            axios.post(`${apiUrl}/operations/${operation}`, {
                type: operation,
                a: parseFloat(value1),
                b: parseFloat(value2),
            }).then((response) => {
                console.log(response.data);
                setResult(operation == "randomString" ? response.data.operationResponse : response.data.amount);
                setBalance(response.data.userBalance); // Assume API returns new balance
            })
                .catch((error) => {
                alert('Error: ' + error?.message || 'Unknown error');
                console.error('Error performing operation:', error);
            });
        }
        catch (error) {
            console.error('Error performing operation:', error);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(Meta, { title: "Calculator" }), _jsxs(FullSizeCenteredFlexBox, { flexDirection: "column", children: [_jsx(Typography, { variant: "h3", children: "New Operation" }), _jsxs(Typography, { variant: "h6", children: ["Current Balance: $", balance.toFixed(2)] }), _jsxs(TextField, { label: "Operation", value: operation, onChange: handleOperationChange, select: true, SelectProps: {
                            native: true,
                        }, margin: "normal", fullWidth: true, children: [_jsx("option", { value: "add", children: "Addition" }), _jsx("option", { value: "subtract", children: "Subtraction" }), _jsx("option", { value: "multiply", children: "Multiplication" }), _jsx("option", { value: "divide", children: "Division" }), _jsx("option", { value: "squareRoot", children: "Square Root" }), _jsx("option", { value: "randomString", children: "Random String" })] }), operation !== 'randomString' &&
                        _jsx(TextField, { label: "Value 1", value: value1, onChange: handleValue1Change, margin: "normal", fullWidth: true }), operation !== 'squareRoot' && operation !== 'randomString' && (_jsx(TextField, { label: "Value 2", value: value2, onChange: handleValue2Change, margin: "normal", fullWidth: true })), _jsx(Button, { onClick: handleSubmit, variant: "contained", sx: { mt: 4 }, children: "Calculate" }), result !== null && (_jsxs(Typography, { variant: "h5", sx: { mt: 4 }, children: ["Result: ", result] }))] })] }));
}
export default Calculator;
