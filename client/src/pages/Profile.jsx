import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import AttendedEvents from "../components/AttendedEvents";
import UserProfile from "../components/UserProfile";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Profile() {
  const navigate = useNavigate();
  const storedEmail = localStorage.getItem("email");
  const id = localStorage.getItem("userId");
  const [token, setToken] = useState(storedEmail);

  useEffect(() => {
    console.log("Token in Navbar:", token);
    return () => {
      console.log("Navbar component is unmounting");
    };
  }, [token]);

  const logout = () => {
    localStorage.clear();
    setToken("");
    navigate("/");
  };

  return (
    <div className="flex h-[calc(100vh-106px)]">
      <aside className="w-60 border-r-2 flex flex-col items-center relative">
        <div
          className="flex items-center mt-3 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <MdKeyboardArrowLeft size={25} />
          <h3 className="text-xl">User Profile</h3>
        </div>
        <ul className="mt-4">
          <li className="py-3 rounded-3xl">
            <Link
              className={`py-3 px-6 hover:bg-primary-500 rounded-3xl ${
                window.location.pathname === `/profile/${id}`
                  ? "bg-primary-500 rounded-3xl"
                  : ""
              }`}
              to={`/profile/${id}`}
            >
              Profile
            </Link>
          </li>
          <li className="py-3">
            <Link
              className={`py-3 px-6 hover:bg-primary-500 rounded-3xl ${
                window.location.pathname === "/profile/attendedevents"
                  ? "bg-primary-500 rounded-3xl"
                  : ""
              }`}
              to="/profile/attendedevents"
            >
              Attended Events
            </Link>
          </li>
        </ul>
        <button className="absolute left-10 bottom-10" onClick={logout}>
          Logout
        </button>
      </aside>
      <div className="w-full h-screen">
        <Routes>
          <Route path="/:id" element={<UserProfile />} />
          <Route path="attendedevents" element={<AttendedEvents />} />
        </Routes>
      </div>
    </div>
  );
}
