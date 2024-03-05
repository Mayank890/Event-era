import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import AttendedEvents from "../components/AttendedEvents";
import UserProfile from "../components/UserProfile";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Profile() {
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("authToken");
  const [token, setToken] = useState(storedToken);

  useEffect(() => {
    console.log("Token in Navbar:", token);
    // ... rest of the code
    return () => {
      // Cleanup code (optional)
      // This will run when the component unmounts
      console.log("Navbar component is unmounting");
    };
  }, [token]);

  return (
    <div className="flex h-[calc(100vh-106px)]">
      <aside className="w-60 border-r-2 flex flex-col items-center relative">
        <div
          className="flex items-center mt-3 cursor-pointer"
          onClick={() => window.history.back()}
        >
          <MdKeyboardArrowLeft size={25} />
          <h3 className="text-xl">User Profile</h3>
        </div>
        <ul className="mt-4">
          <li className="py-3  hover:bg-primary-500 rounded-3xl">
            <Link className="py-3 px-6" to="/profile">
              Profile
            </Link>
          </li>
          <li className="py-3  hover:bg-primary-500 rounded-3xl">
            <Link className="py-3 px-6" to="/profile/attendedevents">
              Attended Events
            </Link>
          </li>
        </ul>
        <button
          className="absolute left-10 bottom-10"
          onClick={() => {
            localStorage.clear();
            setToken((prevToken) => {
              console.log("Previous Token:", prevToken);
              return "";
            });
            navigate("/");
            console.log("Token set to empty string", token);
          }}
        >
          Logout
        </button>
      </aside>
      <div className="w-full h-screen">
        <Routes>
          <Route path="" element={<UserProfile />} />
          <Route path="attendedevents" element={<AttendedEvents />} />
        </Routes>
      </div>
    </div>
  );
}
