import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/Appcontext";

const ProtectedRoute = ({ children }) => {
  const { user , loadingUser} = useAppContext();

  if (loadingUser) {
    return (
      <div className="flex items-center justify-center h-48">
        <div>Checking authentication…</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
