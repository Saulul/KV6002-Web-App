import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import { Link } from "react-router-dom";

const MapComponent = () => {
  const [mapData, setMapData] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedVenueEvents, setSelectedVenueEvents] = useState([]);
  const [venues, setVenues] = useState([]);
  const [multimediaUrl, setMultimediaUrl] = useState(""); // State for multimedia URL
  const [baseUrl, setBaseUrl] = useState(""); // State for base URL

  const fetchVenues = async () => {
    try {
      const response = await axios.get(
        "https://eventhive.creeknet.xyz/api/venues?populate=*"
      );
      setVenues(response.data.data);
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
            import.meta.env.VITE_MAPBOX_API_KEY,
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

    setBaseUrl("https://eventhive.creeknet.xyz"); // Set base URL

    mapboxgl.accessToken =
    import.meta.env.VITE_MAPBOX_API_KEY;
    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-1.6174, 54.9783],
      zoom: 12,
    });

    venues.forEach(async (venue) => {
      const coordinates = await fetchCoordinates(venue.attributes.postcode);
      const marker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .setPopup(
          new mapboxgl.Popup().setHTML(
            `<h3>${venue.attributes.name}</h3>
             ${
               venue.attributes.multimedia &&
               venue.attributes.multimedia.data.length > 0 &&
               venue.attributes.multimedia.data[0].attributes.formats?.small
                 ? `<img src="${baseUrl}${venue.attributes.multimedia.data[0].attributes.formats.small.url}" alt="${venue.attributes.name}" class="w-full h-24 mr-4 rounded">`
                 : ""
             }
             <p>${venue.attributes.description}</p>`
          )
        )
        .addTo(map);

      marker.getElement().addEventListener("click", () => {
        setSelectedMarker(venue);
        setSelectedVenueEvents(venue.attributes.events.data);
        setMultimediaUrl(venue.attributes.multimedia.data[0].attributes.formats.thumbnail.url);
      });
    });

    console.log(multimediaUrl);
    // console.log(baseUrl);
    console.log(venues);

    setMapData(map);

    return () => map.remove();
  }, [venues]);

  return (
    <div className="map-container flex">
      <div id="map-container" style={{ width: "100%", height: "100vh" }} />

      {selectedVenueEvents.length > 0 && (
        <div
          id="event-sidebar"
          className="absolute left-0 top-0 h-full w-96 bg-white border-r border-gray-300 p-4 shadow-lg overflow-auto"
        >
          {multimediaUrl && (
            <img
              src={`${baseUrl}${multimediaUrl}`} // Using multimedia URL and base URL
              alt={selectedMarker && selectedMarker.attributes.name} // Alt text for the venue image
              className="w-full h-auto mb-4 rounded"
            />
          )}
          <h2 className="text-2xl font-semibold mb-4">
            Events at {selectedMarker && selectedMarker.attributes.name}
          </h2>
          <ul>
            {selectedVenueEvents.map((event) => (
              <li key={event.id} className="mb-4">
                <div className="flex flex-col">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {event.attributes.title}
                    </h3>
                    <p className="text-sm mb-2">
                      {event.attributes.description}
                    </p>
                    <p className="text-sm mb-2">
                      Date:{" "}
                      {new Date(event.attributes.date).toLocaleDateString()}
                    </p>
                    <p className="text-sm mb-2">
                      Price: {event.attributes.price}
                    </p>
                    {/* <a
                      href={`${baseUrl}/api/events/${event.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Book
                    </a> */}

                    <Link
                      // to={`${baseUrl}/api/events/${event.id}`}
                      to={`/events/${event.id}`}
                      className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
