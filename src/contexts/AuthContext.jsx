import { createContext, useContext } from "react";
import { useUser } from "../features/authentication/useUser";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const { user, isPending, isAuthenticated } = useUser();

  return (
    <AuthContext.Provider value={{ user, isPending, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Authentication context used outside it's provider");

  return context;
}

export default AuthProvider;
