import { useAuth } from "../auth/use-auth";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Welcome, {user?.name} ({user?.role})</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
