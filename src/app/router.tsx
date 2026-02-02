import ProtectedRoute from "../auth/ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import AdminPanel from "../pages/AdminPanel";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" replace /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <AdminPanel />
      </ProtectedRoute>
    ),
  },
]);
