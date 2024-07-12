import { useCallback, useMemo } from 'react';
import { atom, useRecoilState } from 'recoil';
const hotKeysDialogState = atom({
    key: 'hotkeys-dialog-state',
    default: false,
});
function useHotKeysDialog() {
    const [isOpen, setIsOpen] = useRecoilState(hotKeysDialogState);
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
export default useHotKeysDialog;
