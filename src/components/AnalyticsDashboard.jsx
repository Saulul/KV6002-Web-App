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
        setEvents(response.data.data); // Assuming the response structure is { data: { data: [...] } }
        // After updating the events state, process the chart data
        processChartData(response.data.data); //h
      } else {
        console.error('Failed to fetch events:', response.statusText);
      }
    } catch (error) {
      console.error('There was an error fetching the events:', error);
    }
  };

  const processChartData = (fetchedEvents) => {
    const labels = [];
    const data = [];

    fetchedEvents.forEach(event => {
      labels.push(event.attributes.title);
      // Add the ticketsSoldRegular and ticketsSoldVIP to get the total tickets sold for the event
      const totalTicketsSold = event.attributes.ticketsSoldRegular + event.attributes.ticketsSoldVIP;
      data.push(totalTicketsSold);
    });

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
