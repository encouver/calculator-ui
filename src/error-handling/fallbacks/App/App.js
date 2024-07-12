import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import EmailIcon from '@mui/icons-material/Email';
import RestartIcon from '@mui/icons-material/RestartAlt';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import { email, messages } from '@/config';
import resetApp from '@/utils/reset-app';
function AppErrorBoundaryFallback() {
    return (_jsx(Box, { height: 400, children: _jsx(FullSizeCenteredFlexBox, { children: _jsxs(Paper, { sx: { p: 5 }, children: [_jsx(Typography, { variant: "h5", component: "h3", children: messages.app.crash.title }), _jsx(Button, { startIcon: _jsx(EmailIcon, {}), variant: "outlined", target: "_blank", rel: "noreferrer", href: `mailto: ${email}`, sx: { my: 3 }, children: messages.app.crash.options.email }), _jsx(Typography, { component: "h6", children: "or" }), _jsx(Button, { startIcon: _jsx(RestartIcon, {}), sx: { mt: 3 }, variant: "outlined", onClick: resetApp, children: messages.app.crash.options.reset })] }) }) }));
}
export default AppErrorBoundaryFallback;
