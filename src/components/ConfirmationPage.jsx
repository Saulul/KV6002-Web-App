import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PurchaseConfirmation({ event }) { // Pass the event data as a prop

  useEffect(() => {
    const sendEmail = async (data) => {
      try {
        const response = await axios.post('https://apis-sk.vercel.app/api/send-email', data);
        console.log(response.data); // Log success message
        return response.data;
      } catch (error) {
        console.error('Error:', error);
        throw new Error('Error sending email');
      }
    };

    const updateTicketsSold = async () => {
      try {
        const response = await axios.patch(`https://your-api.com/events/${event.id}`, {
          ticketsSold: event.ticketsSoldRegular + 1 
        });
        console.log(response.data); // Log success message
      } catch (error) {
        console.error('Error updating tickets sold:', error);
      }
    };

    // Fake email data
    const emailData = {
      to: 'findyourway88@example.com',
      subject: 'Test Ticket Purchase Confirmation',
      message: 'Dear customer, Your tickets have been successfully purchased.',
    };

    // Call sendEmail 
    sendEmail(emailData);
    updateTicketsSold();
  }, [event]);

  return (
    <div className="purchase-confirmation-container">
      <div className="purchase-confirmation">
        <h2>Thank you for your purchase!</h2>
        <p>Your tickets have been successfully purchased.</p>
        <p>A confirmation email has been sent to your registered email address.</p>
        <div className="confirmation-options">
          <p>What would you like to do next?</p>
          <div>
            <Link to="/" className="option-link">Return to Home Page</Link>
            <Link to="/purchase-history" className="option-link">View Purchase History</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseConfirmation;
