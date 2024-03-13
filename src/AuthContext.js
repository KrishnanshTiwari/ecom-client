import React, {useState, useEffect, createContext, useContext} from "react";
const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSeller, setSeller] = useState(null);
    const [user, setUser] = useState(null);
    const authToken = localStorage.getItem("token");
      //const id = localStorage.getItem("userId");
  
    useEffect(() => {
      
      if (authToken) {
        if (authToken) {
          setIsLoggedIn(true);
        }
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
      <AuthContext.Provider value={{ isLoggedIn, user, login, logout, setUser, isSeller, setSeller
       }}>
        {children}
      </AuthContext.Provider>
    );
  };