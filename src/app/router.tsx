import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import AdminPanel from "../pages/AdminPanel";
import ProtectedRoute from "../auth/ProtectedRoute";
import AppLayout from "../layouts/AppLayout";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" replace /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      {
        path: "/admin",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminPanel />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
