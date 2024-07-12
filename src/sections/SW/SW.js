import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef } from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { useRegisterSW } from 'virtual:pwa-register/react';
import useNotifications from '@/store/notifications';
// TODO (Suren): this should be a custom hook :)
function SW() {
    const [, notificationsActions] = useNotifications();
    const notificationKey = useRef(null);
    const { offlineReady: [offlineReady, setOfflineReady], needRefresh: [needRefresh, setNeedRefresh], updateServiceWorker, } = useRegisterSW();
    const close = useCallback(() => {
        setOfflineReady(false);
        setNeedRefresh(false);
        if (notificationKey.current) {
            notificationsActions.close(notificationKey.current);
        }
    }, [setOfflineReady, setNeedRefresh, notificationsActions]);
    useEffect(() => {
        if (offlineReady) {
            notificationsActions.push({
                options: {
                    autoHideDuration: 4500,
                    content: _jsx(Alert, { severity: "success", children: "App is ready to work offline." }),
                },
            });
        }
        else if (needRefresh) {
            notificationKey.current = notificationsActions.push({
                message: 'New content is available, click on reload button to update.',
                options: {
                    variant: 'warning',
                    persist: true,
                    action: (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => updateServiceWorker(true), children: "Reload" }), _jsx(Button, { onClick: close, children: "Close" })] })),
                },
            });
        }
    }, [close, needRefresh, offlineReady, notificationsActions, updateServiceWorker]);
    return null;
}
export default SW;
