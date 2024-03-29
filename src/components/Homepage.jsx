import React, { useState, useEffect } from "react";
import Header from "./Header";
import Banner from "./Banner";
import ButtonPanel from "./ButtonPanel";
import SearchFilters from "./SearchFilters";
import EventCard from "./EventCard";
import LoadMoreButton from "./LoadMoreButton";
import Footer from "./Footer";

function Homepage(props) {
  const [events, setEvents] = useState([]);

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
        date: attributes.date,
        price: attributes.price,
        venueName: attributes.venue?.data?.attributes?.name,
        venueCity: attributes.venue?.data?.attributes?.city,
        imageSrc: attributes.multimedia?.data[0]?.attributes?.url
          ? `https://eventhive.creeknet.xyz${attributes.multimedia.data[0].attributes.url}`
          : "defaultImagePathHere", // Provide a default path or handle it in your component
        // Add other details you need in a similar manner
      };
    });

    setEvents(events);
  };

  // Fetch events on component mount
  useEffect(() => {
    fetchEvents();
  }, []); // The empty array means this effect runs once on mount

  // const buttonPanelData = [
  //   { imageSrc: "/assets/Button.png" },
  //   // Add more button data as needed
  // ];
  console.log(events);
  return (
    <div className="flex flex-col items-center pt-12 bg-gray-50 rounded-3xl">
      <Header />
      <Banner />
      {/* <ButtonPanel buttons={buttonPanelData} /> */}
      <SearchFilters />

      <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>

      <LoadMoreButton onClick={() => console.log("Load more...")} />
      <Footer />
    </div>
  );
}

export default Homepage;
