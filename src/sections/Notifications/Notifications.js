import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SnackbarProvider } from 'notistack';
import { notifications } from '@/config';
import Notifier from './Notifier';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { forwardRef } from 'react';
// here how you can define your own notification component
const CustomNotification = forwardRef(function CustomNotification({ message }, ref) {
    return (_jsxs(Alert, { ref: ref, severity: "info", children: [_jsx(AlertTitle, { children: "Notification demo (random IT jokes :))" }), message] }));
});
function Notifications() {
    return (_jsx(SnackbarProvider, { maxSnack: notifications.maxSnack, Components: {
            customNotification: CustomNotification,
        }, children: _jsx(Notifier, {}) }));
}
export default Notifications;
