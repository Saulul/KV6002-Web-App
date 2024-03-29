// SearchFilters.jsx
import React from "react";

const SearchFilter = ({ title, placeholder, iconSrc }) => (
  <div className="flex flex-col flex-1 justify-between">
    <div className="text-base text-gray-50">{title}</div>
    <div className="flex gap-5 justify-between px-4 py-2 mt-3 text-xs bg-gray-200 rounded-md text-neutral-900">
      <div className="self-start mt-2">{placeholder}</div>
      <img loading="lazy" src={iconSrc} className="w-6 aspect-square" />
    </div>
  </div>
);

const SearchFilters = () => (
  <div className="flex gap-5 justify-between px-16 py-9 mt-0 w-full rounded-3xl bg-neutral-900 max-w-[1200px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
    <SearchFilter
      title="Looking for"
      placeholder="Choose event type"
      iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/29daab012856cffe2a967a319fefa174a60e1d0e95387dd4065aef9a30563732?"
    />
    <SearchFilter
      title="Location"
      placeholder="Choose location"
      iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/29daab012856cffe2a967a319fefa174a60e1d0e95387dd4065aef9a30563732?"
    />
    <SearchFilter
      title="When"
      placeholder="Choose date and time"
      iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/29daab012856cffe2a967a319fefa174a60e1d0e95387dd4065aef9a30563732?"
    />
    {/* The search button or another element can be added here */}
  </div>
);

export default SearchFilters;
