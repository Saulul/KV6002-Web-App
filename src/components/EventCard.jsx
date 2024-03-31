import React, { useState } from "react";
import {
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { AddToCalendarButton } from "../libs/add-to-calendar-button-react";
import StarBorderIcon from "@mui/icons-material/StarBorder"; // Import for unfilled star icon
import StarIcon from "@mui/icons-material/Star"; // Import for filled star icon

const EventCard = ({
  imageSrc,
  category,
  title,
  date,
  startDatetime,
  endDatetime,
  venueName,
  venueCity,
}) => {
  const [isFavourited, setIsFavourited] = useState(false); // State to manage if the event is favourited

  // Function to toggle the favourite state
  const toggleFavourite = () => {
    setIsFavourited(!isFavourited);
  };

  // Function to format date and time
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
          <IconButton
            onClick={toggleFavourite}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              color: isFavourited ? "gold" : "white",
              "&:hover": {
                color: "gold",
              },
              fontSize: "2rem",
            }}
          >
            {isFavourited ? (
              <StarIcon fontSize="inherit" />
            ) : (
              <StarBorderIcon fontSize="inherit" />
            )}
          </IconButton>
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
            {category}
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
          ></AddToCalendarButton>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EventCard;
