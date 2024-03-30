import React from "react";

const Header = () => (
  <div className="flex gap-5 justify-between px-5 w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
    <div className="flex-auto text-4xl font-bold text-zinc-400">
      Event<span className="text-zinc-500">Hive</span>
    </div>
    <div className="flex gap-5 justify-between text-base whitespace-nowrap">
      <div className="my-auto text-neutral-900">Login</div>
      <div className="justify-center px-10 py-4 text-center text-white rounded-md bg-zinc-500 max-md:px-5">
        Signup
      </div>
    </div>
  </div>
);

export default Header;
