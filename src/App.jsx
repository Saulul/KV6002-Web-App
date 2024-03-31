import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./components/Map.jsx";
import Homepage from "./components/Homepage.jsx";
import Notifications from "./components/Notifications.jsx";
import Event from "./components/Event.jsx";
import SendEmail from "./components/sendEmail.jsx";
import "./index.css";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/events/:id" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}
