import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from '@mui/material/Typography';
import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
function Page1() {
    return (_jsxs(_Fragment, { children: [_jsx(Meta, { title: "page 1" }), _jsx(FullSizeCenteredFlexBox, { children: _jsx(Typography, { variant: "h3", children: "Page 1" }) })] }));
}
export default Page1;
