import { jsx as _jsx } from "react/jsx-runtime";
import { ErrorBoundary } from 'react-error-boundary';
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
function withErrorHandler(Component, Fallback) {
    function ComponentWithErrorHandling(props) {
        return (_jsx(ErrorBoundary, { FallbackComponent: Fallback, children: _jsx(Component, { ...props }) }));
    }
    ComponentWithErrorHandling.displayName = `WithErrorHandling${getDisplayName(Component)}`;
    return ComponentWithErrorHandling;
}
export { withErrorHandler };
