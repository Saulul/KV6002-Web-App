import React from 'react';

const EmailTemplateBooking = ({ eventName, eventDate, eventLocation }) => {
  return (
    <div>
      <h1>Booking Confirmation: {eventName}</h1>
      <p>Dear Guest,</p>
      <p>We are pleased to confirm your booking for the following event:</p>
      <p><strong>Event Name:</strong> {eventName}</p>
      <p><strong>Date:</strong> {eventDate}</p>
      <p><strong>Location:</strong> {eventLocation}</p>
      <p>Thank you for choosing to attend our event.</p>
      <p>Best regards,<br />EventsHive</p>
    </div>
  );
};

export default EmailTemplateBooking;
