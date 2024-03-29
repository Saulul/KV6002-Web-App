// EventCard.jsx
import React from "react";

const EventCard = ({ imageSrc, title, date, location }) => (
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
      <div className="mt-2 text-neutral-600">{date}</div>
      <div className="mt-1 text-zinc-500">{location}</div>
    </div>
  </div>
);

export default EventCard;
