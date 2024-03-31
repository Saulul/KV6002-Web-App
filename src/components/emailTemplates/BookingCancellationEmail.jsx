import React from 'react';

const BookingCancellationEmail = ({ eventName, eventDate, eventLocation }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">Booking Cancellation: {eventName}</h1>
      <p className="mb-4">Dear Guest,</p>
      <p className="mb-4">We regret to inform you that your booking for the following event has been cancelled:</p>
      <p><strong className="text-blue-900">Event Name:</strong> {eventName}</p>
      <p><strong className="text-blue-900">Date:</strong> {eventDate}</p>
      <p><strong className="text-blue-900">Location:</strong> {eventLocation}</p>
      <p className="mb-4">We apologize for any inconvenience caused. If you have any questions, please feel free to contact us.</p>
      <p className="text-blue-900">Best regards,<br />EventHive</p>
    </div>
  );
};

export default BookingCancellationEmail;
