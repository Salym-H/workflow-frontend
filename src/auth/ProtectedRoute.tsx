import { Navigate } from "react-router-dom";
import { useAuth } from "./use-auth";
import type { ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
  allowedRoles?: ("admin" | "member")[];
};

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    // Not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    // Logged in but role not allowed → redirect somewhere safe
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
