import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { messages } from '@/config';
function LoaderErrorBoundaryFallback() {
    return (_jsx(Box, { children: _jsx(Typography, { variant: "h5", children: messages.loader.fail }) }));
}
export default LoaderErrorBoundaryFallback;
