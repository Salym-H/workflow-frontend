import { createContext, useState, useEffect} from "react";
import type { ReactNode } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "member";
};

export type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    login:  (user: User) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user,setUser] = useState<User | null>(null);

    useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

    return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
