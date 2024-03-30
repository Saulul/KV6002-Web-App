import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Stack,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "neutral.dark", // Adjust this as needed for your theme
        padding: { xs: "20px", md: "40px" },
        marginTop: { xs: "40px", md: "80px" },
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="column" alignItems="center" spacing={4}>
          <Typography
            variant="h4"
            component="div"
            sx={{ color: "text.primary", textAlign: "center" }}
          >
            <Box component="span" sx={{ color: "text.secondary" }}>
              Event
            </Box>
            <Box component="span">Hive</Box>
          </Typography>

          <Box sx={{ width: "100%" }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Enter your mail"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button fullWidth variant="contained" sx={{ height: "100%" }}>
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Grid container spacing={2} justifyContent="center">
              {["Home", "About", "Services", "Get in touch", "FAQs"].map(
                (item) => (
                  <Grid item key={item}>
                    <Typography
                      sx={{ color: "text.secondary", textAlign: "center" }}
                    >
                      {item}
                    </Typography>
                  </Grid>
                )
              )}
            </Grid>
          </Box>

          <Box
            sx={{
              width: "100%",
              borderTop: "1px solid",
              borderColor: "text.secondary",
              marginY: 2,
            }}
          ></Box>

          <Typography
            sx={{ color: "text.secondary", textAlign: "center", width: "100%" }}
          >
            EventHive © 2023 Upload for KV6002
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
