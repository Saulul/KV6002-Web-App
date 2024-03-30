import { FC } from 'react';
import OpenAI from "openai";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./components/Map";
import Homepage from "./components/Homepage";
import Notifications from "./components/Notifications";
import Chat from "./components/Chatbot/Chat"; // Import the Chat component
import AnalyticsDashboard from "./components/AnalyticsDashboard"; // import the analytics component


import "./index.css";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Chat />
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/map" element={<Map/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path="/analytics" element={<AnalyticsDashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;