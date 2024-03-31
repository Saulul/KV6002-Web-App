import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

export default function BasicTextFields() {
  const [searchText, setSearchText] = React.useState("");

  const handleSearch = () => {
    // Implement search logic here
    console.log(`Searching for: ${searchText}`);
  };

  return (
      <Box
          component="form"
          noValidate
          autoComplete="off"
      >
        <TextField
            id="outlined-basic"
            label="What's on your mind?"
            variant="outlined"
            fullWidth
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            InputProps={{
              endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleSearch}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
              ),
            }}
        />
      </Box>
  );
}