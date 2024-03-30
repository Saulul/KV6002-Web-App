// Header.jsx (W20017851 - auth)
// Header component, aware of the user's authentication status.

import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="flex gap-5 justify-between px-5 w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
    <div className="flex-auto text-4xl font-bold text-zinc-400">
      Event<span className="text-zinc-500">Hive</span>
    </div>
    <div className="flex gap-5 justify-between text-base whitespace-nowrap">
      <Link to="/login">
        <Button variant="text" color="primary">
          Login
        </Button>
      </Link>
      <Link to="/register">
        <Button variant="contained" color="secondary">
          Signup
        </Button>
      </Link>
    </div>
  </div>
);

export default Header;
