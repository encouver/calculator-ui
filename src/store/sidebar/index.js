import { useCallback, useMemo } from 'react';
import { atom, useRecoilState } from 'recoil';
const sidebarIsOpenState = atom({
    key: 'sidebar-openness-state',
    default: false,
});
function useSidebar() {
    const [isOpen, setIsOpen] = useRecoilState(sidebarIsOpenState);
    const toggle = useCallback(() => {
        setIsOpen((isOpen) => !isOpen);
    }, [setIsOpen]);
    const close = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);
    const open = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);
    const memoizedActions = useMemo(() => ({ toggle, close, open }), [toggle, close, open]);
    return [isOpen, memoizedActions];
}
export default useSidebar;
