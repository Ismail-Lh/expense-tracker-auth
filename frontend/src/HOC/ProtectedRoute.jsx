import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store';

function ProtectedRoute({ children }) {
  const { username } = useAuthStore.getState().auth;

  const location = useLocation();

  if (!username) return <Navigate to="/" state={{ from: location }} replace />;

  return children;
}

export default ProtectedRoute;
