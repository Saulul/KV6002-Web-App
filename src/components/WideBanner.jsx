import React from "react";

const WideBanner = () => (
  <div className="self-stretch px-20 mt-32 w-full bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
      <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          srcSet="/assets/banner.png"
          className="grow mt-0 w-full aspect-[1.79] max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch my-auto text-lg font-bold text-gray-50 max-md:mt-10">
          <div className="text-4xl">Make your own Event </div>
          <div className="mt-4">
            Your platform for developing ground-breaking events.{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WideBanner;
