import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("authenticated") === "true"
  );

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("authenticated") === "true");
  }, []);

  const login = () => {
    console.log("Called login");
    setIsAuthenticated(true);
    localStorage.setItem("authenticated", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("authenticated");
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};
