// EventCard.jsx
import React from "react";
import { AddToCalendarButton } from '../libs/add-to-calendar-button-react';

const EventCard = ({ imageSrc, category, title, date, venueName, venueCity }) => (
  <div className="p-4 md:w-1/3">
      <div className="flex flex-col h-full p-5 bg-white rounded-xl shadow text-zinc-500">
          <div className="relative w-full h-64 mb-4">
              <img
                  loading="lazy"
                  src={imageSrc}
                  alt="Event"
                  className="object-cover w-full h-full rounded-t-xl"
              />
          </div>
          <div className="text-lg font-semibold text-black">{title}</div>
          <div className="mt-1 font-medium text-neutral-600">{category}</div>
          <div className="mt-1 text-neutral-600">{date}</div>
          <div className="mt-1 text-zinc-500">{venueName},<br/>{venueCity}</div>
          <AddToCalendarButton
              name="Test-Event"
              startDate="2023-05-22"
              options={['Apple','Google','Yahoo','iCal']}
              timeZone="America/Los_Angeles"
          ></AddToCalendarButton>
      </div>
  </div>
);

export default EventCard;
