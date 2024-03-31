import "./index.css";
import './Purchase.css'; // Import CSS file for styling

import { FC } from "react";
import OpenAI from "openai";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./components/Map";
import Homepage from "./components/Homepage";
import Notifications from "./components/Notifications";
import Chat from "./components/Chatbot/Chat"; // Import the Chat component
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";
import NoPage from "./components/NoPage.jsx";

import Stripeint from "./components/stripeint.jsx";
import Buytickets from "./components/BuyTickets.jsx";
import Purchase from "./components/Purchase.jsx";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Chat />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/purchase/:eventId" element={<Purchase/>} />

        <Route path="/notifications" element={<Notifications />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/stripe-payment" element={<Stripeint />} />
        <Route path="/buytickets" element={<Buytickets />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;