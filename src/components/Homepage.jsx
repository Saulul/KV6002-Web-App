import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import ButtonPanel from "./ButtonPanel";
import SearchFilters from "./SearchFilters";
import EventCard from "./EventCard";
import LoadMoreButton from "./LoadMoreButton";
import Footer from "./Footer";

function Homepage(props) {
  // Sample data for EventCard and ButtonPanel components
  const eventCardsData = [
    {
      imageSrc: "/assets/image3.png",
      title: "Event Title Here",
      date: "Saturday, March 18, 9:30PM",
      location: "ONLINE EVENT - Attend anywhere",
    },
    {
      imageSrc: "/assets/image3.png",
      title: "Event Title Here",
      date: "Saturday, March 18, 9:30PM",
      location: "ONLINE EVENT - Attend anywhere",
    },
    {
      imageSrc: "/assets/image3.png",
      title: "Event Title Here",
      date: "Saturday, March 18, 9:30PM",
      location: "ONLINE EVENT - Attend anywhere",
    },
    {
      imageSrc: "/assets/image3.png",
      title: "Event Title Here",
      date: "Saturday, March 18, 9:30PM",
      location: "ONLINE EVENT - Attend anywhere",
    },
    {
      imageSrc: "/assets/image3.png",
      title: "Event Title Here",
      date: "Saturday, March 18, 9:30PM",
      location: "ONLINE EVENT - Attend anywhere",
    },
    // Add more event card data as needed
  ];

  // const buttonPanelData = [
  //   { imageSrc: "/assets/Button.png" },
  //   // Add more button data as needed
  // ];

  return (
    <div className="flex flex-col items-center pt-12 bg-gray-50 rounded-3xl">
      <Header />
      <Banner />
      {/* <ButtonPanel buttons={buttonPanelData} /> */}
      <SearchFilters />
      
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
        {eventCardsData.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>

      <LoadMoreButton onClick={() => console.log("Load more...")} />
      <Footer />
    </div>
  );
}

export default Homepage;
