import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useTheme from '@/store/theme';
import themes from './themes';
function CustomThemeProvider({ children }) {
    const [theme] = useTheme();
    return _jsx(ThemeProvider, { theme: createTheme(themes[theme]), children: children });
}
export default CustomThemeProvider;
