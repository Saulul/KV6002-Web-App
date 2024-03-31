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
import ProfilePage from "./components/ProfilePage";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App: FC = () => {
  return (
    <UserProvider>
      <div className="flex flex-col items-center pt-8 bg-gray-50 rounded-3xl">
      <BrowserRouter>
        <Chat />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/map" element={<Map />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="*" element={<ProfilePage />} />
        </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
};

export default App;
