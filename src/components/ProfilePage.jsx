// ProfilePage.jsx (W20017851)
// Provides user profile information and logout functionality.
// This is a future feature, not in the initial work plan.

import React from "react";
import { useUser } from "./UserContext";
import { Container, Typography, Grid, Paper, Button } from "@mui/material";
import Header from "./Header";
import WideBanner from "./WideBanner";
import Banner from "./Banner";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function ProfilePage() {
    const { user, logout } = useUser();

    if (!user) {
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
        <Banner text="Profile Settings" height="296" />
        <Container
          maxWidth={false}
          sx={{ width: "100%", padding: "0 24px", marginTop: 4 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography
                  variant="h6"
                  component="h2"
                  style={{ fontWeight: "bold" }}
                >
                  Profile Information:
                </Typography>
                <Typography>
                  Name: {user.firstName} {user.lastName}
                </Typography>
                <Typography>Email: {user.email}</Typography>
                <Typography>
                  Profile Type:{" "}
                  {user.profileType == "EventAttendee"
                    ? "Event Attender"
                    : "Event Organizer"}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography
                  variant="h6"
                  component="h2"
                  style={{ fontWeight: "bold" }}
                >
                  Event Information:
                </Typography>
                <Typography>Tickets Purchased: TBD</Typography>
                <Typography>Bookmarked Events: TBD</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            onClick={logout}
          >
            Logout
          </Button>
        </Container>
        <Footer />
      </div>
    );
}

export default ProfilePage;
