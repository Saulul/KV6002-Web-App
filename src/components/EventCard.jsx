import React from "react";
import {AddToCalendarButton} from '../libs/add-to-calendar-button-react';
import {Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';

const EventCard = ({imageSrc, category, title, date, startDatetime, endDatetime, venueName, venueCity}) => {
    // Function to format date and time
    const formatDateTime = (datetime) => {
        const dateObj = new Date(datetime);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JS
        const day = String(dateObj.getDate()).padStart(2, '0');
        const hours = String(dateObj.getHours()).padStart(2, '0');
        const minutes = String(dateObj.getMinutes()).padStart(2, '0');

        return {
            date: `${year}-${month}-${day}`,
            time: `${hours}:${minutes}`
        };
    };

    const start = formatDateTime(startDatetime);
    const end = formatDateTime(endDatetime);

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
            <Card style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                overflow: 'visible'
            }}> <CardMedia
                component="img"
                height="140"
                image={imageSrc}
                alt="Event"
                style={{borderTopLeftRadius: '4px', borderTopRightRadius: '4px'}}
            />
                <CardContent>
                    <Typography variant="h5" component="div" style={{fontWeight: 'bold', marginBottom: '10px'}}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{marginBottom: '10px'}}>
                        {category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{marginBottom: '10px'}}>
                        {date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{marginBottom: '10px'}}>
                        {venueName},<br/>{venueCity}
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