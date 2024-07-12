import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import GitHubIcon from '@mui/icons-material/GitHub';
import ThemeIcon from '@mui/icons-material/InvertColors';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { FlexBox } from '@/components/styled';
import { repository, title } from '@/config';
import useHotKeysDialog from '@/store/hotkeys';
import useNotifications from '@/store/notifications';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';
import { getRandomJoke } from './utils';
import { useAuth } from '@/providers/AuthProvider';
import LogoutIcon from '@mui/icons-material/Logout';
function Header() {
    const { authToken, handleLogout } = useAuth();
    const [, sidebarActions] = useSidebar();
    const [theme, themeActions] = useTheme();
    const [, notificationsActions] = useNotifications();
    const [, hotKeysDialogActions] = useHotKeysDialog();
    function showNotification() {
        notificationsActions.push({
            options: {
                // Show fully customized notification
                // Usually, to show a notification, you'll use something like this:
                // notificationsActions.push({ message: ... })
                // `message` accepts string as well as ReactNode
                // If you want to show a fully customized notification, you can define
                // your own `variant`s, see @/sections/Notifications/Notifications.tsx
                variant: 'customNotification',
            },
            message: getRandomJoke(),
        });
    }
    return (_jsx(Box, { sx: { flexGrow: 1 }, "data-pw": `theme-${theme}`, children: _jsx(AppBar, { color: "transparent", elevation: 1, position: "static", children: _jsxs(Toolbar, { sx: { justifyContent: 'space-between' }, children: [_jsxs(FlexBox, { sx: { alignItems: 'center' }, children: [_jsx(IconButton, { onClick: sidebarActions.toggle, size: "large", edge: "start", color: "info", "aria-label": "menu", sx: { mr: 1 }, children: _jsx(MenuIcon, {}) }), _jsx(Button, { onClick: showNotification, color: "info", children: title })] }), _jsxs(FlexBox, { children: [authToken &&
                                _jsx(IconButton, { onClick: handleLogout, color: "info", children: _jsx(LogoutIcon, {}) }), _jsx(Divider, { orientation: "vertical", flexItem: true }), _jsx(Tooltip, { title: "It's open source", arrow: true, children: _jsx(IconButton, { color: "info", size: "large", component: "a", href: repository, target: "_blank", children: _jsx(GitHubIcon, {}) }) }), _jsx(Divider, { orientation: "vertical", flexItem: true }), _jsx(Tooltip, { title: "Switch theme", arrow: true, children: _jsx(IconButton, { color: "info", edge: "end", size: "large", onClick: themeActions.toggle, "data-pw": "theme-toggle", children: _jsx(ThemeIcon, {}) }) })] })] }) }) }));
}
export default Header;
