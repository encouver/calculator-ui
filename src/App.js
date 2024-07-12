import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Header from '@/sections/Header';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';
import Sidebar from '@/sections/Sidebar';
import { AuthProvider } from './providers/AuthProvider';
import { StateMachineProvider } from "little-state-machine";
import { DevTool } from "little-state-machine-devtools";
function App() {
    return (_jsx(Fragment, { children: _jsxs(StateMachineProvider, { children: [_jsx(DevTool, {}), _jsx(CssBaseline, {}), _jsx(Notifications, {}), _jsx(SW, {}), _jsx(AuthProvider, { children: _jsxs(BrowserRouter, { children: [_jsx(Header, {}), _jsx(Sidebar, {}), _jsx(Pages, {})] }) })] }) }));
}
export default withErrorHandler(App, AppErrorBoundaryFallback);
