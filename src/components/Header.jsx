// Header.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
    Button,
    Menu,
    MenuItem,
    ListItemIcon,
    Typography,
    Snackbar,
    Alert,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useUser } from "./UserContext";

const Header = () => {
    const { user, logout, alert, closeAlert } = useUser(); // Destructure the new alert state and closeAlert
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="flex gap-5 justify-between mb-9 px-5 w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-4xl font-bold text-zinc-400">
                <Link to="/">
                    Event<span className="text-zinc-500">Hive</span>
                </Link>
            </div>
            <div className="flex gap-5 justify-between text-base whitespace-nowrap">
                {user ? (
                    <>
                        <Button
                            variant="text"
                            color="primary"
                            onClick={handleClick}
                            sx={{ textTransform: "none", fontWeight: "bold" }}
                            startIcon={<AccountCircleIcon />}
                        >
                            {user.firstName || "Profile"}
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem onClick={handleClose} component={Link} to="/myevents">
                                <FavoriteIcon
                                    style={{ marginRight: "10px" }}
                                    color="primary"
                                />
                                My Events
                            </MenuItem>
                            <MenuItem
                                onClick={handleClose}
                                component={Link}
                                to="/mytickets"
                            >
                                <ConfirmationNumberIcon
                                    style={{ marginRight: "10px" }}
                                    color="primary"
                                />
                                My Tickets
                            </MenuItem>
                            <MenuItem onClick={handleClose} component={Link} to="/profile">
                                <ListItemIcon>
                                    <AccountCircleIcon
                                        style={{ marginRight: "10px" }}
                                        color="primary"
                                    />
                                </ListItemIcon>
                                Profile
                            </MenuItem>
                        </Menu>
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{
                                textTransform: "none",
                                backgroundColor: "primary.main",
                                color: "white",
                                "&:hover": { backgroundColor: "primary.dark" },
                            }}
                            onClick={() => {
                                logout();
                                navigate("/");
                            }}
                        >
                            Sign Out
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            variant="text"
                            color="primary"
                            sx={{ textTransform: "none" }}
                            onClick={() => navigate("/login")}
                        >
                            Log In
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                backgroundColor: "primary.main",
                                color: "white",
                                "&:hover": { backgroundColor: "primary.dark" },
                            }}
                            onClick={() => navigate("/register")}
                        >
                            Sign Up
                        </Button>
                    </>
                )}
            </div>
            <Snackbar
                open={alert.open}
                autoHideDuration={6000}
                onClose={closeAlert}
            >
                <Alert onClose={closeAlert} severity="success" sx={{ width: "100%" }}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Header;
