import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Login = ({ onLogin }:{ onLogin:any }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();

    const result = onLogin(username, password);

    if (!result) {
        alert('Login failed, please try again.')
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={2}>
        <Typography>Username</Typography>
        <TextField
          fullWidth
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Box>
      <Box mb={2}>
        <Typography>Password</Typography>
        <TextField
          fullWidth
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
  );
};

export default Login;