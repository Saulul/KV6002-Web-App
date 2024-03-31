import React from 'react';

const BookingConfirmationEmail = ({ eventName, eventDate, eventLocation }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">Booking Confirmation: {eventName}</h1>
      <p className="mb-4">Dear Guest,</p>
      <p className="mb-4">We are pleased to confirm your booking for the following event:</p>
      <p><strong className="text-blue-900">Event Name:</strong> {eventName}</p>
      <p><strong className="text-blue-900">Date:</strong> {eventDate}</p>
      <p><strong className="text-blue-900">Location:</strong> {eventLocation}</p>
      <p className="mb-4">Thank you for choosing to attend our event. We look forward to seeing you there!</p>
      <p className="text-blue-900">Best regards,<br />EventHive</p>
    </div>
  );
};

export default BookingConfirmationEmail;
