import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (!storedToken) {
      navigate("/signup");
    }
    localStorage.clear();
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
};

export default App;
