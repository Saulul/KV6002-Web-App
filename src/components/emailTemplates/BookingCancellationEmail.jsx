import React from 'react';

const BookingCancellationEmail = ({ eventName, eventDate, eventLocation }) => {
  return (
    <div>
      <h1>Booking Cancellation: {eventName}</h1>
      <p>Dear Guest,</p>
      <p>We regret to inform you that your booking for the following event has been cancelled:</p>
      <p><strong>Event Name:</strong> {eventName}</p>
      <p><strong>Date:</strong> {eventDate}</p>
      <p><strong>Location:</strong> {eventLocation}</p>
      <p>We apologize for any inconvenience caused. If you have any questions, please feel free to contact us.</p>
      <p>Best regards,<br />The Event Management Team</p>
    </div>
  );
};

export default BookingCancellationEmail;
