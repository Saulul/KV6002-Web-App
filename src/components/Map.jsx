import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";

const MapComponent = () => {
  const [mapData, setMapData] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedVenueEvents, setSelectedVenueEvents] = useState([]); // State for storing selected venue events
  const [venues, setVenues] = useState([]); // State for storing venue data

  const fetchVenues = async () => {
    try {
      const response = await axios.get(
        "https://eventhive.creeknet.xyz/api/venues?populate=*"
      );
      setVenues(response.data.data); // Set the fetched venue data
    } catch (error) {
      console.error("Error fetching venues:", error);
    }
  };

  const fetchCoordinates = async (address) => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json`,
        {
          params: {
            access_token:
              "pk.eyJ1Ijoic3RlZmFuazc3NyIsImEiOiJjbHN0Z2xpeGIxcnNxMmpwczhjNGNzbm5sIn0.9K8UicMtbutDLrXWgxiF7A",
          },
        }
      );
      return response.data.features[0].geometry.coordinates;
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  useEffect(() => {
    fetchVenues();
  }, []);

  useEffect(() => {
    if (!venues.length) return;

    mapboxgl.accessToken =
      "pk.eyJ1Ijoic3RlZmFuazc3NyIsImEiOiJjbHN0Z2xpeGIxcnNxMmpwczhjNGNzbm5sIn0.9K8UicMtbutDLrXWgxiF7A";
    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-1.6174, 54.9783], // Newcastle Upon Tyne coordinates
      zoom: 12, // Zoom level to focus closely on Newcastle Upon Tyne
    });

    venues.forEach(async (venue) => {
      const coordinates = await fetchCoordinates(venue.attributes.postcode);
      const marker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .setPopup(
          new mapboxgl.Popup().setHTML(
            `<h3>${venue.attributes.name}</h3>
             <p>${venue.attributes.description}</p>`
          )
        )
        .addTo(map);

      // Add event listener to marker
      marker.getElement().addEventListener("click", () => {
        setSelectedMarker(venue); // Set selected venue
        setSelectedVenueEvents(venue.attributes.events.data); // Set selected venue events
      });
    });

    setMapData(map);

    return () => map.remove();
  }, [venues]);

  {
    /* {selectedMarker && (
        <div id="info-panel">
          <h2 className="text-3xl font-bold">{selectedMarker.attributes.name}</h2>
          <p className="text-l font-bold">{selectedMarker.attributes.description}</p>
        </div>
      )} */
  }

  return (
    <div className="map-container flex">
      <div id="map-container" style={{ width: "100%", height: "100vh" }} />
  
      {selectedVenueEvents.length > 0 && (
        <div
          id="event-sidebar"
          className="absolute left-0 top-0 h-full w-96 bg-white border-r border-gray-300 p-4 shadow-lg overflow-auto"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Events at {selectedMarker.attributes.name}
          </h2>
          <ul>
            {selectedVenueEvents.map((event) => (
              <li key={event.id} className="mb-4">
                <h3 className="text-lg font-semibold">
                  {event.attributes.title}
                </h3>
                <p className="text-sm mb-2">{event.attributes.description}</p>
                <p className="text-sm mb-2">
                  Date: {new Date(event.attributes.date).toLocaleDateString()}
                </p>
                <p className="text-sm mb-2">Price: {event.attributes.price}</p>
                <a
                  href={`https://eventhive.creeknet.xyz/api/events/${event.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Book
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
  
};

export default MapComponent;
