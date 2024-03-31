import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const AnalyticsDashboard = () => {
  const [events, setEvents] = useState([]);
  const [chartData, setChartData] = useState({});

  // Utility function to fetch events and their associated tickets from the API
  const fetchEvents = async () => {
    try {
      // Make an HTTP GET request to fetch events with their tickets populated
      const response = await fetch('https://eventhive.creeknet.xyz/api/events?populate=tickets');
      if (response.ok) {
        const jsonResponse = await response.json();
        // Check if jsonResponse.data exists and is an array before calling .map
        if (Array.isArray(jsonResponse.data)) {
          setEvents(jsonResponse.data.map(event => {
            return {
              ...event.attributes,
              id: event.id,
              // Count the number of tickets related to each event
              ticketCount: event.attributes.tickets.data.length,
            };
          }));
        } else {
          // If jsonResponse.data is not an array, handle accordingly
          console.error('Unexpected response format:', jsonResponse);
        }
      } else {
        // If the response is not successful, log the error status
        console.error('Failed to fetch events:', response.statusText);
      }
    } catch (error) {
      // If there's an error during fetch, log the error
      console.error('There was an error fetching the events:', error);
    }
  };

  // Function to process the data for the chart
  const processChartData = () => {
    // Extract the titles and ticket counts from the events data
    const labels = events.map(event => event.title);
    const data = events.map(event => event.ticketCount);

    // Set up the chart data structure with labels and datasets
    setChartData({
      labels,
      datasets: [{
        label: 'Tickets Sold',
        data: data,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }],
    });
  };

  // Effect hook to fetch events when the component mounts
  useEffect(() => {
    fetchEvents();
  }, []);

  // Effect hook to process the chart data whenever the events data changes
  useEffect(() => {
    if (events.length > 0) {
      processChartData();
    }
  }, [events]);

  // Render the analytics dashboard with a Bar chart containing the processed data
  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <Bar data={chartData} /> 
    </div>
  );
};

export default AnalyticsDashboard;
