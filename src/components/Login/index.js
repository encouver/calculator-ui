import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const result = onLogin(username, password);
        if (!result) {
            alert('Login failed, please try again.');
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, children: [_jsxs(Box, { mb: 2, children: [_jsx(Typography, { children: "Username" }), _jsx(TextField, { fullWidth: true, variant: "outlined", value: username, onChange: (e) => setUsername(e.target.value) })] }), _jsxs(Box, { mb: 2, children: [_jsx(Typography, { children: "Password" }), _jsx(TextField, { fullWidth: true, variant: "outlined", type: "password", value: password, onChange: (e) => setPassword(e.target.value) })] }), _jsx(Button, { variant: "contained", color: "primary", type: "submit", children: "Login" })] }));
};
export default Login;
