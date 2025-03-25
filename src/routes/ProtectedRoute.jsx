import { Navigate } from 'react-router-dom';
import { useCombinedContexts } from './../hooks/useCombineContexs.js';

export const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useCombinedContexts();
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children;
};