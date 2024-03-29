import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import SearchTextBox from "./SearchTextBox";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Box from "@mui/material/Box";

export default function BasicSelect() {
    const [lookingFor, setLookingFor] = React.useState("");
    const [where, setWhere] = React.useState("");
    const [when, setWhen] = React.useState(null);

    const handleChange = (event, setter) => {
        if (setter === setWhen) {
            setter(event); // Treat date value directly
        } else {
            setter(event.target.value);
        }
    };

    return (
        <div
            className="flex gap-5 justify-between px-16 py-9 mt-3 rounded-3x max-w-[1200px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <Box sx={{minWidth: 140}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Looking for</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={lookingFor}
                        label="Looking for"
                        onChange={(event) => handleChange(event, setLookingFor)}
                    >
                        <MenuItem value={10}>Live Music</MenuItem>
                        <MenuItem value={20}>Comedy</MenuItem>
                        <MenuItem value={30}>Theatre</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{minWidth: 120}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Where</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={where}
                        label="Where"
                        onChange={(event) => handleChange(event, setWhere)}
                    >
                        <MenuItem value={10}>Newcastle</MenuItem>
                        <MenuItem value={20}>Sunderland</MenuItem>
                        <MenuItem value={30}>Middlesbrough</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ minWidth: 140 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="When"
                            value={when}
                            onChange={(newValue) => handleChange(newValue, setWhen)}
                        />
                    </LocalizationProvider>
                </FormControl>
            </Box>
            <SearchTextBox/>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "#71717a",
                    color: "white",
                    p: 1,
                    borderRadius: 1,
                }}
            >
                <SearchIcon/>
            </Box>
        </div>
    );
}
