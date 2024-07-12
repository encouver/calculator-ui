import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Meta from '@/components/Meta';
import useOrientation from '@/hooks/useOrientation';
function Welcome() {
    const isPortrait = useOrientation();
    const width = isPortrait ? '40%' : '30%';
    const height = isPortrait ? '30%' : '40%';
    return (_jsx(_Fragment, { children: _jsx(Meta, { title: "Welcome" }) }));
}
export default Welcome;
