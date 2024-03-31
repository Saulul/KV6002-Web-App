import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link"; // For navigation links
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const footerTheme = createTheme({
  palette: {
    mode: "light", // Light mode for white background
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px", // Small border radius
          textTransform: "none", // Avoid uppercase
          color: "white", // Button text color
          backgroundColor: "primary.main", // Blue background
          "&:hover": {
            backgroundColor: "primary.dark", // Darker blue on hover
          },
        },
      },
    },
  },
});

const Footer = () => (
    <ThemeProvider theme={footerTheme}>
      <Box sx={{
        bgcolor: "background.paper",
        px: 8,
        py: 6,
        width: '100%', // Make the footer take full width
        bottom: 0,
      }}>
      <Grid container spacing={4} justifyContent="space-between">
          {/* Title */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" fontWeight="bold" className="text-zinc-400">
              Event<span className="text-zinc-500">Hive</span>
            </Typography>
          </Grid>

          {/* Subscription */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Subscribe to our newsletter
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <TextField
                  label="Enter your email"
                  variant="outlined"
                  size="small"
                  sx={{ flex: 1, mr: 2, mb: 2 }}
              />
              <Button variant="contained" sx={{ mb: 2 }}>
                Subscribe
              </Button>
            </Box>
          </Box>
        </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={2}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="#" underline="hover" color="text.primary">
                Home
              </Link>
              <Link href="#" underline="hover" color="text.primary">
                About
              </Link>
              <Link href="#" underline="hover" color="text.primary">
                Services
              </Link>
              <Link href="#" underline="hover" color="text.primary">
                Get in touch
              </Link>
              <Link href="#" underline="hover" color="text.primary">
                FAQs
              </Link>
            </Box>
          </Grid>

          {/* Social Icons & Copyright */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
              <Link href="#" sx={{ mx: 1 }}>
                <FacebookIcon color="primary" />
              </Link>
              <Link href="#" sx={{ mx: 1 }}>
                <XIcon color="primary" />
              </Link>
              <Link href="#" sx={{ mx: 1 }}>
                <InstagramIcon color="primary" />
              </Link>
              <Link href="#" sx={{ mx: 1 }}>
                <YouTubeIcon color="primary" />
              </Link>
            </Box>
          </Grid>
        </Grid>

      </Box>
    </ThemeProvider>
);

export default Footer;
