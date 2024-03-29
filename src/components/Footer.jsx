// Footer.jsx
import React from "react";

const Footer = () => (
  <div className="flex flex-col self-stretch px-16 pt-10 pb-6 mt-32 w-full bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <div className="flex flex-col items-end self-center max-w-full w-[648px]">
      <div className="self-stretch text-4xl font-bold text-center text-zinc-500 max-md:max-w-full">
        <span className="text-gray-50">Event</span>{" "}
        <span className="text-zinc-500">Hive</span>
      </div>
      <div className="flex gap-2.5 justify-center mt-7 mr-5 max-w-full whitespace-nowrap w-[450px] max-md:flex-wrap max-md:mr-2.5">
        <div className="grow justify-center items-start py-5 pr-16 pl-4 text-xs bg-white rounded-md text-slate-500 max-md:pr-5">
          Enter your mail
        </div>
        <div className="grow justify-center px-10 py-4 text-base text-center text-white rounded-md bg-zinc-500 max-md:px-5">
          Subscribe
        </div>
      </div>
      <div className="flex gap-0 justify-center mt-8 text-base text-center text-white max-md:flex-wrap max-md:max-w-full">
        <div className="grow">Home</div>
        <div>About</div>
        <div className="flex-auto">Services</div>
        <div className="flex-auto">Get in touch</div>
        <div className="grow">FAQs</div>
      </div>
    </div>
    <div className="shrink-0 mt-7 h-px bg-white max-md:max-w-full" />
    <div className="flex gap-5 justify-between mt-6 w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-2.5 items-center text-xs text-center text-white whitespace-nowrap">
        <div className="justify-center self-stretch px-5 py-2.5 rounded-md aspect-[2.26] bg-zinc-500">
          English
        </div>
        <div className="self-stretch my-auto">French</div>
        <div className="self-stretch my-auto">Hindi</div>
      </div>
      <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-4 justify-center px-px">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3154c4e1aff88efc93bc09c4ccef434c067a31ef5faa201d29d57318a4acf20c?"
            className="aspect-square w-[31px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c67c7831952fd57070cd499bcca6df52424205155184bf4b2e386b19e944287c?"
            className="aspect-square w-[31px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db877a0f4c077d292c2aa74deda0ba7e30af6b0e8c6e1be86b5482f0647148e5?"
            className="aspect-square w-[31px]"
          />
        </div>
        <div className="flex-auto self-start mt-3 text-base text-right text-white">
          Non Copyrighted © 2023 Upload by KV6002
          <br />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
