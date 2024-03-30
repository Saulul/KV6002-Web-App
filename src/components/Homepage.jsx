import React, {useState, useEffect} from "react";
import Header from "./Header";
import Banner from "./Banner";
import SearchFilters from "./SearchFilters";
import EventCard from "./EventCard";
import LoadMoreButton from "./LoadMoreButton";
import WideBanner from "./WideBanner";
import Footer from "./Footer";
import {Grid} from "@mui/material";

function Homepage(props) {
    const [events, setEvents] = useState([]);

    const formatDateString = (dateString) =>
        new Intl.DateTimeFormat("en-US", {
            day: "numeric",
            month: "long",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        }).format(new Date(dateString));

    // Function to fetch event data
    const fetchEvents = async () => {
        const response = await fetch(
            "https://eventhive.creeknet.xyz/api/events?populate=categories,venue,multimedia"
        );
        const data = await response.json();

        // Loop nested API response and extract only the data needed
        const events = data.data.map((item) => {
            const attributes = item.attributes;

            return {
                id: item.id,
                title: attributes.title,
                description: attributes.description,
                category: attributes.categories?.data[0]?.attributes?.name,
                date: formatDateString(attributes.date),
                startDatetime: attributes.date,
                endDatetime: attributes.endDatetime,
                price: attributes.price,
                venueName: attributes.venue?.data?.attributes?.name,
                venueCity: attributes.venue?.data?.attributes?.city,
                imageSrc: attributes.multimedia?.data[0]?.attributes?.url
                    ? `https://eventhive.creeknet.xyz${attributes.multimedia.data[0].attributes.url}`
                    : "defaultImagePathHere",
            };
        });

        setEvents(events);
    };
    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div className="flex flex-col items-center pt-12 bg-gray-50 rounded-3xl">
            <Header/>
            <Banner/>
            <SearchFilters/>


            <Grid container spacing={2} alignItems="stretch" sx={{pr: 2, pl:2}}>
                {events.map((event, index) => (
                    <EventCard key={index} {...event} />
                ))}
            </Grid>

            <LoadMoreButton onClick={() => console.log("View more...")}/>
            <WideBanner/>
            <Footer/>
        </div>
    );
}

export default Homepage;
