import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [profile, setProfile] = useState({});
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    setToken(storedToken);
    if (storedToken) {
      console.log(storedToken);
      const decodeToken = jwtDecode(storedToken);
      console.log(decodeToken);
      // setProfile(decodeToken);
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return <section className="text-gray-600 body-font"></section>;
};

export default Welcome;
