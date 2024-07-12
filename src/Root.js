import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';
import ThemeProvider from '@/theme/Provider';
const container = document.getElementById('root');
const root = createRoot(container);
function render(App) {
    root.render(
    // <StrictMode>
    _jsx(RecoilRoot, { children: _jsx(HelmetProvider, { children: _jsx(ThemeProvider, { children: _jsx(App, {}) }) }) })
    // </StrictMode>
    );
}
export default render;
