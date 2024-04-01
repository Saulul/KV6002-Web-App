import React, { useState } from "react";
import {
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  Snackbar,
} from "@mui/material";
import { AddToCalendarButton } from "../libs/add-to-calendar-button-react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Alert from "@mui/material/Alert";

const EventCard = ({
  imageSrc,
  category,
  title,
  date,
  startDatetime,
  endDatetime,
  venueName,
  venueCity,
  isLoggedIn, // Prop to track if the user is logged in
}) => {
  const [isFavourited, setIsFavourited] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const toggleFavourite = () => {
    if (!isLoggedIn) {
      setOpen(true);
      setAlertMessage("Please login to favourite events");
      setAlertSeverity("warning");
    } else {
      setIsFavourited(!isFavourited);
      // Adjusting message and severity based on the favourite state
      if (isFavourited) {
        setAlertMessage("Event removed from favourites");
        setAlertSeverity("info");
      } else {
        setAlertMessage("Added to favourites");
        setAlertSeverity("success");
      }
      setOpen(true);
    }
  };

  const formatDateTime = (datetime) => {
    const dateObj = new Date(datetime);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    const hours = String(dateObj.getHours()).padStart(2, "0");
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");

    return {
      date: `${year}-${month}-${day}`,
      time: `${hours}:${minutes}`,
    };
  };

  const start = formatDateTime(startDatetime);
  const end = formatDateTime(endDatetime);

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      style={{ position: "relative", display: "flex" }}
    >
      <Card
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          overflow: "visible",
        }}
      >
        <div style={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="140"
            image={imageSrc}
            alt="Event"
            style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}
          />
        </div>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            style={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginBottom: "10px" }}
          >
            <b>{category}</b>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginBottom: "10px" }}
          >
            {date}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginBottom: "10px" }}
          >
            {venueName},<br />
            {venueCity}
          </Typography>
          <AddToCalendarButton
            name={title}
            startDate={start.date}
            startTime={start.time}
            endDate={end.date}
            endTime={end.time}
            timeZone="Europe/London"
            location={`${venueName}, ${venueCity}`}
            options="'Google','Apple','Outlook.com','Yahoo','iCal'"
          />
          <Button
            startIcon={isFavourited ? <StarIcon /> : <StarBorderIcon />}
            onClick={toggleFavourite}
            style={{ marginTop: "10px" }}
          >
            {isFavourited ? "Remove from favourites" : "Add to favourites"}
          </Button>
        </CardContent>
      </Card>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertSeverity}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default EventCard;
