// Banner.jsx
import React from "react";

const Banner = () => (
  <div className="flex overflow-hidden relative flex-col px-9 py-12 mt-8 w-full max-w-[1320px] min-h-[596px] max-md:px-5 max-md:max-w-full">
    <img
      loading="lazy"
      srcSet="/assets/home-banner.png"
      className="object-cover absolute inset-0 size-full"
    />
    <div className="relative self-center mt-16 ml-14 text-6xl font-bold text-center text-white uppercase max-md:mt-10 max-md:max-w-full max-md:text-4xl">
      Made for those <br />
      who do
    </div>
  </div>
);

export default Banner;
