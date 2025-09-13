import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/Appcontext";
import Loading from './Loading'

const ProtectedRoute = ({ children }) => {
  const { user , loadingUser} = useAppContext();

  if (loadingUser) {
    return (
      <div className="flex items-center justify-center h-48">
        <Loading />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
