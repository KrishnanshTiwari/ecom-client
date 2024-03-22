import React, {useState, useEffect, createContext, useContext} from "react";
const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSeller, setIsSeller] = useState(null);
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch("https://ecommerce-backend-w0k9.onrender.com/user/getDetails", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            sessionToken: authToken,
          },
        });
        if (response.ok) {
          const userDetails = await response.json();
          setIsSeller(userDetails.isSeller);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        setIsLoggedIn(false);
      }
    };

    if (authToken) {
      setIsLoggedIn(true);
      fetchUserDetails();
    } else {
      setIsLoggedIn(false);
    }
  }, [authToken]);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, isSeller }}>
      {children}
    </AuthContext.Provider>
  );
};
