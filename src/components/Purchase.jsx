import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Purchase() {
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const [regularQuantity, setRegularQuantity] = useState(0);
  const [vipQuantity, setVIPQuantity] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Use navigate instead of history

  let { eventId } = useParams();

  useEffect(() => {
    const url = `https://eventhive.creeknet.xyz/api/events/${eventId}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 404) {
          throw new Error('Event not found');
        } else {
          throw new Error('An error occurred while fetching the event');
        }
      })
      .then(data => {
        setEvent(data);
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
        setError(error.message);
      });
  }, [eventId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!event) {
    return <div>Loading...</div>;
  }

  const handlePurchaseClick = () => {
    const regularAvailable = event.data.attributes.ticketQuantityRegular - event.data.attributes.ticketsSoldRegular;
    const vipAvailable = event.data.attributes.ticketQuantityVIP - event.data.attributes.ticketSoldVIP;

    if (regularQuantity <= 0 && vipQuantity <= 0) {
      setErrorMessage('Please enter a valid quantity.');
      return;
    }

    if (regularQuantity > regularAvailable && vipQuantity > vipAvailable) {
      setErrorMessage('Sorry, both ticket types are not available.');
      return;
    }

    setShowDialog(true);
  };

  const handleBuyTickets = () => {
    console.log('Regular tickets purchased:', regularQuantity);
    console.log('VIP tickets purchased:', vipQuantity);
    setShowDialog(false);
    // Redirect to Stripe payment page (simulate)
    navigate('/stripe-payment'); // Use navigate instead of history.push
  };

  // Function to format date to DD/MM/YYYY HH:MM
  const formatDate = dateString => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  return (
    <div className="ticket">
      <div className="ticket-header">
        <h1>{event.data.attributes.title}</h1>
        <p>Date: {formatDate(event.data.attributes.date)}</p>
        <p>Venue: {event.data.attributes.venue}</p>
      </div>
      <div className="ticket-body">
        <h2>Description</h2>
        <p>{event.data.attributes.description}</p>
      </div>
      <div className="ticket-tickets">
        <div>
          <h3>Regular Tickets</h3>
          <p>Price: £{event.data.attributes.ticketPriceRegular}</p>
          <p>Available: {event.data.attributes.ticketQuantityRegular - event.data.attributes.ticketsSoldRegular}</p>
          <input
            type="number"
            value={regularQuantity}
            onChange={(e) => setRegularQuantity(e.target.value)}
            placeholder="Enter quantity"
          />
        </div>
        <div>
          <h3>VIP Tickets</h3>
          <p>Price: £{event.data.attributes.ticketPriceVIP}</p>
          <p>Available: {event.data.attributes.ticketQuantityVIP - event.data.attributes.ticketSoldVIP}</p>
          <input
            type="number"
            value={vipQuantity}
            onChange={(e) => setVIPQuantity(e.target.value)}
            placeholder="Enter quantity"
          />
        </div>
      </div>
      <div className="ticket-footer">
        <button onClick={handlePurchaseClick}>Buy Tickets</button>
      </div>
      {showDialog && (
        <div className="dialog">
          <h3>Confirm Purchase</h3>
          <p>Regular Tickets: {regularQuantity}</p>
          <p>VIP Tickets: {vipQuantity}</p>
          <button onClick={handleBuyTickets}>Confirm Purchase</button>
        </div>
      )}
      {errorMessage && (
        <div className="error-dialog">
          <p>{errorMessage}</p>
          <button onClick={() => setErrorMessage('')}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Purchase;
