import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/use-auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fakeUser = {
      id: 1,
      name,
      email,
      role: "member" as const,
    };

    login(fakeUser);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

