import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
function Page4() {
    return (_jsxs(_Fragment, { children: [_jsx(Meta, { title: "page 4" }), _jsxs(FullSizeCenteredFlexBox, { flexDirection: "column", children: [_jsx(Typography, { variant: "h3", children: "Page 4" }), _jsx(Button, { to: `/${Math.random().toString()}`, component: Link, variant: "outlined", sx: { mt: 4 }, size: "small", color: "warning", children: "Whant to check 404?" })] })] }));
}
export default Page4;
