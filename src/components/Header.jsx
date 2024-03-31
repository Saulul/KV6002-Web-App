// Header.jsx (W20017851 - auth)
// Header component, aware of the user's authentication status.

import React, {useState, useEffect} from "react";
import {
    Button,
    Menu,
    MenuItem,
    ListItemIcon,
    Typography,
} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";

const API_URL = "https://eventhive.creeknet.xyz/api";

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [userFirstName, setUserFirstName] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const open = Boolean(anchorEl);

    const isLoggedIn = () => {
        return localStorage.getItem("jwt") !== null;
    };

    const handleLogout = () => {
        localStorage.removeItem("jwt");
        setUserFirstName("");
        navigate("/");
    setOpenSnackbar(true); // Show the Snackbar
  };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
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
                            sx={{textTransform: "none", fontWeight: "bold"}}
                            startIcon={<AccountCircleIcon/>}
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
                                <ListItemIcon>
                                    <FavoriteIcon fontSize="small"/>
                                </ListItemIcon>
                                <Typography variant="inherit">My Events</Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    navigate("/tickets");
                                    handleClose();
                                }}
                            >
                                <ListItemIcon>
                                    <ConfirmationNumberIcon fontSize="small"/>
                                </ListItemIcon>
                                <Typography variant="inherit">My Tickets</Typography>
                            </MenuItem>
                        </Menu>
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{
                                textTransform: "none",
                                backgroundColor: "primary.main", color: "white", "&:hover": {
                                    backgroundColor: "primary.dark",
                                },
                            }}
                            onClick={handleLogout}
                        >
                            Sign Out
                        </Button>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <Button variant="text" color="primary" sx={{textTransform: "none"}}>
                                Log In
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button
                                variant="contained"
                                sx={{
                                    textTransform: "none",
                                    backgroundColor: "primary.main", color: "white", "&:hover": {
                                        backgroundColor: "primary.dark",
                                    },
                                }}
                                onClick={handleLogout}
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </>
                )}
            </div>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    You have been logged out successfully
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Header;
