import "./index.css";
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
import { UserProvider } from "./components/UserContext";


const App: FC = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Chat />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/map" element={<Map />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
