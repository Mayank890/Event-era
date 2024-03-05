// import axios from "axios";
import React, { useState } from "react";
import axios from "../../services/api";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { PiLockFill } from "react-icons/pi";
import { FaEyeSlash } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const SignUp = ({ handleAccount }) => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userName: "",
    mobileNumber: "",
    password: "",
    cpassword: "",
  });

  const handleFormInput = (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value,
    }));
    console.log(credentials);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cpassword) {
      console.error("Password and Confirm Password do not match.");
      return;
    }
    try {
      axios
        .post("/api/v1/signup", {
          userName: credentials.userName,
          email: credentials.email,
          password: credentials.password,
        })
        .then((response) => {
          const jwtToken = response.data.token;
          localStorage.setItem("authToken", jwtToken);
          const token = localStorage.getItem("authToken");
          console.log(jwtToken);
          console.log("successfully assigned token", token);
          // navigate("/");
          navigate(location.state?.from || "/");

          window.scrollTo(0, 0);

          // window.history.back();
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log("Err signing up", err);
    }
  };

  return (
    <div id="auth-section">
      <form id="auth-form" onSubmit={(e) => handleFormSubmit(e)}>
        <div className="input-username">
          <FaUser />
          <input
            type="text"
            name="userName"
            value={credentials.userName}
            onChange={(e) => handleFormInput(e)}
            placeholder="Name"
            required
          />
        </div>
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
        <div>
          <div className="flex items-center">
            <PiLockFill />
            <input
              type="password"
              name="cpassword"
              value={credentials.cpassword}
              onChange={(e) => handleFormInput(e)}
              placeholder="Confirm password"
              required
            />
          </div>
          <FaEyeSlash />
        </div>
        {/* <h5 id="forgot-password">Forgot Password?</h5> */}
        <button className="submit-button" type="submit">
          Sign Up
        </button>
        <p className="text-sm font-normal">
          Already have an account?{" "}
          <span
            className="text-primary-500 cursor-pointer"
            onClick={() => handleAccount(true)}
          >
            {" "}
            Login{" "}
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
