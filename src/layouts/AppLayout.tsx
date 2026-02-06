import {outlet, Link, useNavigation, Navigate, useNavigate} from "react-router-dom";
import { useAuth } from "../auth/use-auth";

export default function AppLayout() {
    const { user, logout } = useAuth();
    const navigation = useNavigation();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

return (
    <div>
        <header style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Link to="/dashboard">Dashboard</Link>

        {user?.role === "admin" && (
          <Link to="/admin">Admin</Link>
        )}

        <span style={{ marginLeft: "auto" }}>
          {user?.name} ({user?.role})
        </span>

        <button onClick={handleLogout}>Logout</button>
      </header>

      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
)
};