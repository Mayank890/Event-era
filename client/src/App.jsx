import React, { useEffect, useState } from "react";
import Auth from "./components/auth/Auth";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import AllEvents from "./pages/AllEvents";
import EventDetail from "./pages/EventDetail";

const App = () => {
  const storedToken = localStorage.getItem("authToken");
  const [token, setToken] = useState(storedToken);
  const navigate = useNavigate();

  useEffect(() => {}, [token, navigate]);

  return (
    <div className="app relative">
      <Navbar />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/:id" element={<EventDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
