// EventCard.jsx
import React from "react";

const EventCard = ({ imageSrc, title, date, location }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow p-5 w-full text-xs bg-white rounded-xl shadow text-zinc-500 max-md:mt-5">
      <div className="flex overflow-hidden relative flex-col items-start pt-2.5 pr-16 pb-12 pl-2.5 text-xs text-center whitespace-nowrap aspect-[1.45] max-md:pr-5">
        <img
          loading="lazy"
          srcSet={imageSrc}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative justify-center px-2.5 py-1.5 mb-28 bg-white rounded-md aspect-[1.91] max-md:mb-10">
          FREE
        </div>
      </div>
      <div className="mt-5 text-base text-black">{title}</div>
      <div className="mt-6 whitespace-nowrap">{date}</div>
      <div className="mt-7 whitespace-nowrap text-zinc-500">{location}</div>
    </div>
  </div>
);

export default EventCard;
