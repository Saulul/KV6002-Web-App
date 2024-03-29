/**
 * Map
 */

import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";

const MapComponent = () => {
  const [mapData, setMapData] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null); // State for selected marker

  const dummyData = [
    {
      coordinates: [-73.935242, 40.73061], // New York City
      title: "Example Marker 1",
      description: "This is example marker 1 on the map.",
      category: "Example Category 1",
      imageUrl: "https://example.com/image1.jpg",
    },
    {
      coordinates: [-74.0059, 40.7128], // New York City
      title: "Example Marker 2",
      description: "This is example marker 2 on the map.",
      category: "Example Category 2",
      imageUrl: "https://example.com/image2.jpg",
    },
    // Add more markers around the UK
    {
      coordinates: [-0.1276, 51.5074], // London
      title: "London Marker",
      description: "This is a marker in London.",
      category: "UK",
      imageUrl: "https://example.com/london.jpg",
    },
    {
      coordinates: [-1.9036, 52.4828], // Birmingham
      title: "Birmingham Marker",
      description: "This is a marker in Birmingham.",
      category: "UK",
      imageUrl: "https://example.com/birmingham.jpg",
    },
    {
      coordinates: [-3.1883, 55.9533], // Edinburgh
      title: "Edinburgh Marker",
      description: "This is a marker in Edinburgh.",
      category: "UK",
      imageUrl: "https://example.com/edinburgh.jpg",
    },
    // Add more markers as needed
  ];

  useEffect(() => {
    mapboxgl.accessToken =
        import.meta.env.VITE_MAPBOX_API_KEY;
    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-2.941, 54.293], // Centered around the UK
      zoom: 5,
    });

    // Add markers and click event listener
    dummyData.forEach((marker) => {
      const markerElement = new mapboxgl.Marker()
        .setLngLat(marker.coordinates)
        .addTo(map);

      markerElement.getElement().addEventListener("click", () => {
        setSelectedMarker(marker); // Update selectedMarker state
      });
    });

    setMapData(map);

    return () => map.remove();
  }, []);

  return (
    <div>
      {" "}
      {/* Wrapper for map and info panel */}
      <div id="map-container" style={{ width: "100%", height: "75vh" }} />
      {selectedMarker && (
        <div id="info-panel" >
          <h2 className="text-3xl font-bold">{selectedMarker.title}</h2>
          <p className="text-l font-bold">{selectedMarker.description}</p>
          <a href="#"> Book </a>
          {/* Add more fields here as needed */}
        </div>
      )}
    </div>
  );
};

export default MapComponent;
