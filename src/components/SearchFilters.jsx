import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchTextBox from "./SearchTextBox";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {Container, Grid} from "@mui/material";

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
        <Container sx={{ '@media (min-width:1535px)': { maxWidth: '75%' } }}>
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" sx={{ mt: 2, mb: 2, pr: 2, pl:2}}>
            <Grid item xs={12} sm={6} lg={3}>
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
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
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
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
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
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <SearchTextBox/>
            </Grid>
        </Grid>
        </Container>
    );
}
