import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios'; 

const AnalyticsDashboard = () => {
  const [events, setEvents] = useState([]);
  const [chartData, setChartData] = useState({});

  const fetchEvents = async () => {
    try {
      const response = await axios.get('https://eventhive.creeknet.xyz/api/events?populate=tickets');
      if (response.status === 200) {
        // Directly set the fetched data into the events state
        setEvents(response.data.data);
        // After updating the events state, you can call processChartData here
        processChartData(response.data.data);
      } else {
        console.error('Failed to fetch events:', response.statusText);
      }
    } catch (error) {
      console.error('There was an error fetching the events:', error);
    }
  };

  const processChartData = (fetchedEvents) => {
    // If you still need to process data for the chart (e.g., count tickets), you'll have to use some form of iteration
    // But since we're avoiding map, we can use forEach or for loops instead
    const labels = [];
    const data = [];
    
    fetchedEvents.forEach(event => {
      labels.push(event.attributes.title);
      data.push(event.attributes.tickets.data.length); // Assuming this is how you get ticket counts
    });

    setChartData({
      labels: labels,
      datasets: [{
        label: 'Tickets Sold',
        data: data,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }],
    });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <Bar data={chartData} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default AnalyticsDashboard;
