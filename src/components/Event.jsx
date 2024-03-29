import React, { useState, useEffect } from "react";
import axios from "axios";

const Event = () => {
  const [eventData, setEventData] = useState(null);
  const [baseUrl, setBaseUrl] = useState("https://eventhive.creeknet.xyz/api");
  const pathname = window.location.pathname;

  // URL to fetch
  const url = baseUrl + pathname + "/?populate=*";

  useEffect(() => {
    console.log(baseUrl);
    const fetchEvent = async () => {
      try {
        // console.log("Event URL:", baseUrl + pathname); // Add this line to log eventUrl
        const response = await axios.get(url);
        setEventData(response.data);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    fetchEvent();
  }, []);

  if (!eventData) {
    return <div>Loading...</div>;
  }

  // Declare data
  const event = eventData.data.attributes;

  // Extract data from response
  const { title, description, date, price, multimedia, venue } = event;
  const venueData = venue.data.attributes;

  // Inline style for the background image
  const bannerStyle = {
    backgroundImage: `url(https://eventhive.creeknet.xyz${multimedia.data[0].attributes.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "80%",
  };

  return (
    <div>
      <div
        className="flex relative flex-col px-16 pt-8 pb-16 rounded-xl bg-neutral-900 bg-opacity-50 max-md:px-5 max-md:max-w-[3/4] mx-auto"
        style={bannerStyle}
      >
        <div className="self-center w-full max-w-[1140px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base text-white max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-1.5 justify-center self-start p-2.5 text-center whitespace-nowrap rounded-md shadow-sm bg-zinc-500">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2408c84d0e1d7f58baaca89b2a8a430271f72581e62a19efa6cd50476f7c5b5d?apiKey=502ae8557db84acda4e42f2acb31612f&" // Use dynamic imageUrl
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div><a href="/">Back</a></div>
                </div>
                <div className="mt-20 text-6xl font-bold max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                  {title}
                </div>
                <div className="mt-12 text-4xl font-bold max-md:mt-10 max-md:max-w-full">
                  {venue.name}
                </div>
                <div className="mt-6 max-md:max-w-full">{description}</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-8 py-9 mt-24 w-full text-base bg-white rounded-xl shadow-sm max-md:px-5 max-md:mt-10">
                <div className="text-2xl font-bold text-black">Date & time</div>
                <div className="mt-8 text-lg text-zinc-500">
                  {new Date(date).toLocaleString()} {/* Use dynamic date */}
                </div>
                <div className="mt-7 text-zinc-500">Add to calendar</div>
                <div className="justify-center items-center px-10 py-4 mt-6 text-center text-white rounded-md bg-zinc-500 max-md:px-5">
                  Book now
                </div>
                <div className="justify-center items-center px-10 py-4 mt-2.5 text-center text-white rounded-md bg-stone-300 max-md:px-5">
                  Program promoter
                </div>
                <div className="self-center mt-6 text-center text-zinc-500">
                  No Refunds
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2.5 self-start mt-6 text-lg text-white">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/42e137f32a6677b26d4b4293c42e682b24a49b650a0495223645ea403931b576?"
            className="shrink-0 aspect-[0.95] w-[19px]"
          />
          <div>
            <a href="/map" target="_blank">
              View map
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 px-8 py-6 mx-auto w-10/12 bg-white rounded-xl">
        <h3 className="text-2xl font-semibold text-black">Description</h3>
        <p className="text-black">{description}</p>
        <h3 className="text-2xl font-semibold text-black mt-5">Date</h3>
        <p className="text-black">{new Date(date).toLocaleDateString()}</p>
        <h3 className="text-2xl font-semibold text-black mt-5">Organizer</h3>
        <p className="text-black">
          Organizer contact: {venueData.contactNumber}
        </p>
        <h3 className="text-2xl font-semibold text-black mt-5">Category</h3>
        <p className="text-black">
          {eventData.data.attributes.categories.data[0].attributes.name}
        </p>
        <h3 className="text-2xl font-semibold text-black mt-5">Venue</h3>
        <p className="text-black">{venueData.name}</p>
        <p className="text-black">
          Address: {venueData.address}, {venueData.city}, {venue.postcode}
        </p>
        <p className="text-black">{venueData.description}</p>
        <p className="text-black">Contact Email: {venueData.contactEmail}</p>
        <p className="text-black">Contact Number: {venueData.contactNumber}</p>
        <p className="text-black">
          Website:{" "}
          <a href={venueData.website} className="text-blue-500">
            {venueData.website}
          </a>
        </p>
        <h3 className="text-2xl font-semibold text-black mt-5">Price</h3>
        <p className="text-black">£{price}</p>
      </div>
    </div>
  );
};

export default Event;
