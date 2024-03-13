import React, { useState } from "react";
// import axios from "../../services/api";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { FaEyeSlash, FaUser } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { PiLockFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const LogIn = ({ handleAccount, haveAccount }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleFormInput = (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/api/user/login/user", {
          user_email: credentials.email,
          password: credentials.password,
        })
        .then((response) => {
          // const jwtToken = response.data.token;
          // localStorage.setItem("authToken", jwtToken);
          // const token = localStorage.getItem("authToken");
          // console.log(jwtToken);
          // console.log("successfully assigned token", token);
          console.log(response);

          localStorage.setItem("email", credentials.email);
          navigate(location.state?.from || "/");
          // window.history.back();
          window.scrollTo(0, 0);
        });
    } catch (err) {
      console.log("Err signing up", err);
    }
  };

  return (
    <div id="auth-section">
      <form id="auth-form" onSubmit={(e) => handleFormSubmit(e)}>
        <div>
          <MdEmail />
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={(e) => handleFormInput(e)}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <div className="flex items-center">
            <PiLockFill />
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={(e) => handleFormInput(e)}
              placeholder="Password"
              required
            />
          </div>
          <FaEyeSlash />
        </div>

        <p className="w-full text-end text-sm font-normal text-primary-500">
          Forgot Password?
        </p>
        <button className="submit-button" type="submit">
          Login
        </button>
        <p className="text-sm font-normal">
          Don't have an account?{" "}
          <span
            className="text-primary-500 cursor-pointer"
            onClick={() => handleAccount(false)}
          >
            {" "}
            Sign Up{" "}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
