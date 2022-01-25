import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import authService from "../services/auth.service";

const AuthContext = createContext();

function AuthProviderWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const verifyStoredToken = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/auth/verify`,
          { headers: { Authorization: `Bearer ${storedToken}` } }
        );

        const user = response.data;
        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(user);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  const logInUser = (token) => {
    localStorage.setItem("authToken", token);
    verifyStoredToken();
  };

  const logOutUser = () => {
    localStorage.removeItem("authToken");

    setIsLoggedIn(false);
    setUser(null);
  };

  useEffect(() => {
    verifyStoredToken();
  }, []);


  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isLoading, user, setUser, logInUser, logOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };
