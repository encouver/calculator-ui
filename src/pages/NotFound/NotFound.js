import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { CenteredFlexBox, FullSizeCenteredFlexBox } from '@/components/styled';
import { giphy404, messages } from '@/config';
function NotFound() {
    return (_jsx(Container, { sx: { height: '100%' }, children: _jsxs(FullSizeCenteredFlexBox, { flexDirection: "column", children: [_jsx("iframe", { src: giphy404, width: "100%", height: "50%", style: { maxHeight: '60%', maxWidth: '100%' }, frameBorder: "0", allowFullScreen: true }), _jsxs(CenteredFlexBox, { flexDirection: "column", children: [_jsx(Typography, { sx: { mt: 2 }, variant: "h4", color: "error", children: "404 Not Found" }), _jsx(Divider, { variant: "middle" }), _jsx(Typography, { variant: "h4", sx: { color: (theme) => theme.palette.info.main }, children: messages[404] })] })] }) }));
}
export default NotFound;
