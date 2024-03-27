import React from 'react';
import axios from 'axios';
import BookingConfirmationEmail from './emailTemplates/BookingConfirmationEmail'; // Adjusted import path
import BookingCancellationEmail from './emailTemplates/BookingCancellationEmail'; // Adjusted import path

const Notifications = () => {
  const sendBookingConfirmationEmail = async () => {
    // These will be pulled dynamically from the db
    const eventName = 'Example Event';
    const eventDate = '2024-03-25';
    const eventLocation = 'Example Venue';

    try {
      await axios.post('https://your-strapi-backend.com/email/send', {
        to: 'recipient@example.com',
        subject: 'Booking Confirmation: Example Event',
        html: <BookingConfirmationEmail eventName={eventName} eventDate={eventDate} eventLocation={eventLocation} />
      });
      alert('Booking confirmation email sent successfully!');
    } catch (error) {
      console.error('Error sending booking confirmation email: ', error);
      alert('Error sending booking confirmation email. Please try again later.');
    }
  };

  const sendBookingCancellationEmail = async () => {
    // These will be pulled dynamically from the db
    const eventName = 'Example Event';
    const eventDate = '2024-03-25';
    const eventLocation = 'Example Venue';

    try {
      await axios.post('https://your-strapi-backend.com/email/send', {
        to: 'recipient@example.com',
        subject: 'Booking Cancellation: Example Event',
        html: <BookingCancellationEmail eventName={eventName} eventDate={eventDate} eventLocation={eventLocation} />
      });
      alert('Booking cancellation email sent successfully!');
    } catch (error) {
      console.error('Error sending booking cancellation email: ', error);
      alert('Error sending booking cancellation email. Please try again later.');
    }
  };

  // I am using buttons at the moment for testing, and after it is working before integrating with the general app it will be modified
  return (
    <div>
      <h2>Notifications</h2>

      <div>
        <h3>Send Mail upon Booking</h3>
        <button onClick={sendBookingConfirmationEmail}>Send Booking Confirmation Email</button>
      </div>

      <div>
        <h3>Send Mail upon Cancellation</h3>
        <button onClick={sendBookingCancellationEmail}>Send Booking Cancellation Email</button>
      </div>
    </div>
  );
};

export default Notifications;
