import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";

interface Props {
  children: ReactNode;
  role?: string;
}

function ProtectedRoute({ children, role }: Props) {

  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        در حال بررسی...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        شما اجازه دسترسی به این صفحه را ندارید
      </div>
    );
  }

  return <>{children}</>;
}

export default ProtectedRoute;
