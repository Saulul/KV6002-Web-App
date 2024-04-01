// UserContext.jsx (W20017851 - auth)
// Provides core user authentication functionality.

import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState({ open: false, message: "" });

  const fetchUserData = async () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      try {
        const response = await fetch(
          `https://eventhive.creeknet.xyz/api/users/me?populate=*`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        const userData = await response.json();
        
        if (response.ok) {
          setUser({ jwt: jwt, firstName: userData.firstName, lastName: userData.lastName, email: userData.email, id: userData.id, profileType: userData.profileType });
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const logout = () => {
    console.log("Logging out...");
    localStorage.removeItem("jwt"); // Remove JWT from local storage
    setUser(null); // Clear user state
    setAlert({ open: true, message: "You have been logged out successfully" }); // Set logout alert
  };

  const closeAlert = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, alert, closeAlert }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
