import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 0, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="What's on your mind?" variant="outlined" />
    </Box>
  );
}