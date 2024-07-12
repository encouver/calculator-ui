import { useCallback, useMemo } from 'react';
import { atom, useRecoilState } from 'recoil';
import { Themes } from '@/theme/types';
const themeModeState = atom({
    key: 'theme-mode-state',
    default: 'dark',
    effects: [synchronizeWithLocalStorage],
});
function synchronizeWithLocalStorage({ setSelf, onSet }) {
    const storedTheme = localStorage.getItem('theme-mode');
    storedTheme && setSelf(storedTheme);
    onSet((value) => localStorage.setItem('theme-mode', value));
}
function useTheme() {
    const [themeMode, setThemeMode] = useRecoilState(themeModeState);
    const toggle = useCallback(() => {
        setThemeMode((mode) => (mode === Themes.DARK ? Themes.LIGHT : Themes.DARK));
    }, [setThemeMode]);
    const memoizedActions = useMemo(() => ({ toggle }), [toggle]);
    return [themeMode, memoizedActions];
}
export default useTheme;
