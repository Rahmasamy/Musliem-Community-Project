import { useAuth } from "@/hooks/useAuth";
import { JSX } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children?: JSX.Element;
  requiredRole?: string;
}

export default function ProtectedRoute({
  children,
  requiredRole,
}: ProtectedRouteProps) {
  const loginUser = useAuth();
  const user = loginUser?.user;
  console.log("from protected routes", user);
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
