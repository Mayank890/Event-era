import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  // const storedToken = localStorage.getItem("authToken");
  const location = useLocation();
  const email = localStorage.getItem("email");

  // useEffect(() => {
  //   // if (storedToken) {
  //     // const decodeToken = jwtDecode(storedToken);
  //     // setProfile(decodeToken);
  //   // }
  // }, [storedToken]);

  return (
    <header className=" w-full h-auto   px-7 py-6 sm:items-center bg-primary-100/30 relative z-10">
      <div className="flex sm:justify-between justify-center container mx-auto">
        <nav className="flex items-center sm:flex-row flex-col relative ">
          <a
            className="flex items-center sm:mb-0 mb-4 cursor-pointer w-56"
            onClick={() => navigate("/")}
          >
            <img src="/logo.png" className="w-full" alt="" />
          </a>
          {location.pathname === "/auth" || location.pathname === "/profile" ? (
            ""
          ) : (
            <div className="flex w-96 h-12 border border-grey-400 px-4 py-2 rounded-3xl ml-8 items-center focus-within:border-black">
              <CiSearch size={17.5} className="text-grey-400" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent pl-2 w-full"
              />
            </div>
          )}
        </nav>
        <div className="hidden md:flex md:items-center  font-normal">
          <button className="group border  px-7 py-3 text-primary-500 flex items-center border-primary-400 text-base rounded-3xl mr-4 transition">
            <FaPlus className="group-hover:text-primary-500 mr-3 " />
            Create Event
          </button>
          {!email ? (
            <button
              className="text-white bg-primary-500 px-16 py-3 text-base rounded-3xl transition font-medium"
              // onClick={() => navigate("/profile")}
              onClick={() =>
                navigate("/auth", { state: { from: location.pathname } })
              }
            >
              Login
            </button>
          ) : (
            <div
              className="flex items-center justify-center bg-primary-500 w-12 h-12 rounded-full cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              <span className="text-3xl">
                {/* {profile && profile.userName
                  ? profile.userName[0].toUpperCase()
                  : " "} */}
                {email && email[0].toUpperCase()}
              </span>
            </div>
          )}
        </div>

        <RiMenu3Line className="md:hidden text-3xl font-extraBold text-black absolute right-5" />
      </div>
    </header>
  );
};

export default Navbar;
