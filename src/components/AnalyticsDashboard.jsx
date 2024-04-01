import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Main component for the analytics dashboard
const AnalyticsDashboard = () => {
  // State for storing events and chart data
  const [events, setEvents] = useState([]);
  const [chartData, setChartData] = useState({});

  // Fetch events from the API
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

  // Process chart data from events
  const processChartData = (fetchedEvents) => {
    const labels = [];
    const data = [];

    // Loop over each event to prepare chart data
    fetchedEvents.forEach(event => {
      labels.push(event.attributes.title);
      const ticketsSoldRegular = Number(event.attributes.ticketsSoldRegular) || 0;
      const ticketSoldVIP = Number(event.attributes.ticketSoldVIP) || 0;
      const totalTicketsSold = ticketsSoldRegular + ticketSoldVIP;
      data.push(totalTicketsSold);
    });

    // Set the chart data state
    setChartData({
      labels,
      datasets: [{
        label: 'Total Tickets Sold',
        data,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }],
    });
  };

  // Fetch events on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  // Chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10, // Step size for y-axis ticks
        },
        max: 100, // Maximum value for y-axis
      },
    },
    maintainAspectRatio: false, // Ensure the chart maintains the size we give it
  };

  return (
    <div style={{ height: '500px', maxWidth: '800px', margin: 'auto' }}>
      {/* Dashboard title */}
      <h1 style={{
        position: 'absolute',
        left: '50%',
        top: '10px',
        transform: 'translateX(-50%)',
        fontWeight: 'bold',
        fontSize: '24px',
      }}>
        Analytics Dashboard
      </h1>

      {/* Render the bar chart if data is available */}
      {chartData.datasets && chartData.datasets.length > 0 && (
        <Bar data={chartData} options={options} />
      )}

      {/* Home button */}
      <a
        href="/" // Points to the root of your application (home)
        style={{
          display: 'inline-block',
          backgroundColor: '#4A90E2',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '20px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '18px',
          position: 'absolute',
          right: '20px',
          top: '20px',
        }}
      >
        Home
      </a>
    </div>
  );
};

export default AnalyticsDashboard;
