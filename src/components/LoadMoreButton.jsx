// LoadMoreButton.jsx
import React from "react";

const LoadMoreButton = ({ onClick }) => (
  <div
    className="justify-center px-5 py-4 mt-10 text-base text-center text-white whitespace-nowrap rounded-md bg-zinc-500 max-md:px-5"
    onClick={onClick}
  >
    View more...
  </div>
);

export default LoadMoreButton;
