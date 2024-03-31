import React from "react";
import { useUser } from "./UserContext";
import { Container, Typography, Button } from "@mui/material";

function ProfilePage() {
  const { user, logout } = useUser();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Typography variant="h5">You are not logged in</Typography>
        {/* Consider adding a link or button to navigate to the login page here */}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center pt-12 bg-gray-50 rounded-3xl">
      <Container sx={{ mt: 4, mb: 4, textAlign: "center" }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Profile Information
        </Typography>
        <Typography variant="h6">First Name: {user.firstName}</Typography>
        {/* Add more user details here as needed */}

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={logout}
        >
          Logout
        </Button>
      </Container>
    </div>
  );
}

export default ProfilePage;
