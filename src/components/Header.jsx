// Header.jsx (W20017851 - auth)
// Header component, aware of the user's authentication status.

import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "https://eventhive.creeknet.xyz/api";

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [userFirstName, setUserFirstName] = useState("");
  const open = Boolean(anchorEl);

  const isLoggedIn = () => {
    return localStorage.getItem("jwt") !== null;
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setUserFirstName("");
    navigate("/");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        try {
          const response = await fetch(`${API_URL}/users/me`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });
          const userData = await response.json();
          if (response.ok) {
            setUserFirstName(userData.firstName);
          } else {
            console.error("Failed to fetch user data");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    if (isLoggedIn()) {
      fetchUserData();
    }
  }, []);

  return (
    <div className="flex gap-5 justify-between px-5 w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
      <div className="flex-auto text-4xl font-bold text-zinc-400">
        Event<span className="text-zinc-500">Hive</span>
      </div>
      <div className="flex gap-5 justify-between text-base whitespace-nowrap">
        {isLoggedIn() ? (
          <>
            <Button
              variant="text"
              color="primary"
              onClick={handleClick}
              sx={{ textTransform: "none" }}
            >
              {userFirstName || "Profile"}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/events");
                  handleClose();
                }}
              >
                Events
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/tickets");
                  handleClose();
                }}
              >
                Tickets
              </MenuItem>
            </Menu>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
            >
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button variant="text" color="primary">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="contained" color="secondary">
                Signup
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
