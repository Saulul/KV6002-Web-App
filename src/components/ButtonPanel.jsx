// ButtonPanel.jsx
import React from "react";

const ButtonPanel = ({ buttons }) => (
  <div className="flex relative gap-5 justify-between mt-8 mb-44 max-md:flex-wrap max-md:mb-10 max-md:max-w-full">
    {buttons.map((button, index) => (
      <div
        key={index}
        className="flex justify-center items-center px-2.5 aspect-square bg-zinc-100 bg-opacity-20 h-[50px] rounded-[50px] w-[50px]"
      >
        <img
          loading="lazy"
          src={button.imageSrc}
          className="w-full aspect-square"
        />
      </div>
    ))}
  </div>
);

export default ButtonPanel;
