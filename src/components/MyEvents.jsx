// MyEvents.jsx (W20017851 - events)
// Provides a list of events that the user has bookmarked.

import React from "react";
import { useUser } from "./UserContext";
import { Container, Typography, Grid, Paper, Button } from "@mui/material";
import Header from "./Header";
import WideBanner from "./WideBanner";
import Banner from "./Banner";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";

function MyEvents() {
    const { user, logout } = useUser();

    try {
        console.log(user.id);
    } catch (UncaughtTypeError) {
        console.log("User is not logged in");
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <Typography variant="h5">You are not logged in</Typography>
                <Link to="/login">
                    <Button variant="contained" color="primary">
                        Login
                    </Button>
                </Link>
            </div>
        );
    }


    if (user.id === undefined) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <Typography variant="h5">You are not logged in</Typography>
                <Link to="/login">
                    <Button variant="contained" color="primary">
                        Login
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center bg-gray-50 rounded-3xl">
            <Header />
            <Banner text="Favourite Events" height="296" />

            <Footer />
        </div>
    );
}

export default MyEvents;
