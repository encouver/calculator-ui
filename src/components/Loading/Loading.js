import { jsx as _jsx } from "react/jsx-runtime";
import CircularProgress from '@mui/material/CircularProgress';
import { FullSizeCenteredFlexBox } from '@/components/styled';
function Loading() {
    return (_jsx(FullSizeCenteredFlexBox, { children: _jsx(CircularProgress, {}) }));
}
export default Loading;
