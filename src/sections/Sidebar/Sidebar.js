import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import DefaultIcon from '@mui/icons-material/Deblur';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import routes from '@/routes';
import useSidebar from '@/store/sidebar';
function Sidebar() {
    const [isSidebarOpen, sidebarActions] = useSidebar();
    return (_jsx(SwipeableDrawer, { anchor: "left", open: isSidebarOpen, onClose: sidebarActions.close, onOpen: sidebarActions.open, disableBackdropTransition: false, swipeAreaWidth: 30, "data-pw": "sidebar", children: _jsx(List, { sx: { width: 250, pt: (theme) => `${theme.mixins.toolbar.minHeight}px` }, children: Object.values(routes)
                .filter((route) => route.title)
                .map(({ path, title, icon: Icon }) => (_jsx(ListItem, { sx: { p: 0 }, children: _jsxs(ListItemButton, { component: Link, to: path, onClick: sidebarActions.close, children: [_jsx(ListItemIcon, { children: Icon ? _jsx(Icon, {}) : _jsx(DefaultIcon, {}) }), _jsx(ListItemText, { children: title })] }) }, path))) }) }));
}
export default Sidebar;
