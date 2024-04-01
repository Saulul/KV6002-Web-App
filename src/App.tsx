import "./index.css";
import './Purchase.css'; // Import CSS file for styling
import { FC } from "react";
import OpenAI from "openai";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./components/Map";
import Homepage from "./components/Homepage";
import Chat from "./components/Chatbot/Chat"; // Import the Chat component
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";
import { UserProvider } from "./components/UserContext";
import ProfilePage from "./components/ProfilePage";
import MyEvents from "./components/MyEvents";
import NoPage from "./components/NoPage.jsx";
import Event from "./components/Event";
import Stripeint from "./components/stripeint.jsx";
import Buytickets from "./components/BuyTickets.jsx";
import Purchase from "./components/Purchase.jsx";
import AnalyticsDashboard from "./components/AnalyticsDashboard";

const App: FC = () => {
  return (
    <UserProvider>
      <div className="flex flex-col items-center pt-8 bg-gray-50 rounded-3xl">
        <BrowserRouter>
          <Chat />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/map" element={<Map />} />
              <Route path="/purchase/:eventId" element={<Purchase/>} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/login" element={<UserLogin />} />
              <Route path="*" element={<NoPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/myevents" element={<MyEvents />} />
              <Route path="/stripe-payment" element={<Stripeint />} />
              <Route path="/buytickets" element={<Buytickets />} />
              <Route path="/analytics" element={<AnalyticsDashboard />} />
              <Route path="/events/:id" element={<Event />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
};

export default App;
