import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./components/Map.jsx";
import Homepage from "./components/Homepage.jsx";
import Notifications from "./components/Notifications.jsx";
import "./index.css";
import "./App.css";

export default function App() {
  return (
    // These routes are defined this way for testing
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  );
}
