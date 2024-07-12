import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navigate, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import { getPageHeight } from './utils';
import Calculator from '@/pages/Calculator';
import Login from '@/components/Login';
import { useAuth } from '@/providers/AuthProvider';
import Records from '@/pages/Records';
function Pages() {
    const { authToken, handleLogin } = useAuth();
    return (_jsx(Box, { sx: { height: (theme) => getPageHeight(theme) }, children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: authToken ? _jsx(Navigate, { to: "/calculator" }) : _jsx(Login, { onLogin: handleLogin }) }), _jsx(Route, { path: "/login", element: authToken ? _jsx(Navigate, { to: "/calculator" }) : _jsx(Login, { onLogin: handleLogin }) }), _jsx(Route, { path: "/calculator", element: authToken ? _jsx(Calculator, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/records", element: authToken ? _jsx(Records, {}) : _jsx(Navigate, { to: "/login" }) })] }) }));
}
export default Pages;
