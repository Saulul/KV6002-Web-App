import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const AnalyticsDashboard = () => {
  const [events, setEvents] = useState([]);
  const [chartData, setChartData] = useState(null); // Initialize to null

  const fetchEvents = async () => {
    try {
      const response = await axios.get('https://eventhive.creeknet.xyz/api/events?populate=tickets');
      if (response.status === 200) {
        setEvents(response.data.data);
        processChartData(response.data.data);
      } else {
        console.error('Failed to fetch events:', response.statusText);
      }
    } catch (error) {
      console.error('There was an error fetching the events:', error);
    }
  };

  const processChartData = (fetchedEvents) => {
    const labels = fetchedEvents.map(event => event.attributes.title);
    const data = fetchedEvents.map(event => 
      event.attributes.ticketsSoldRegular + event.attributes.ticketsSoldVIP
    );

    setChartData({
      labels,
      datasets: [{
        label: 'Total Tickets Sold',
        data,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }]
    });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Define chart options
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      {/* Conditional rendering to only display the chart once the data is ready */}
      {chartData && <Bar data={chartData} options={options} />}
    </div>
  );
};

export default AnalyticsDashboard;
