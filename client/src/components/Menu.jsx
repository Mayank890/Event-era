import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileSidebar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const id = localStorage.getItem("userId");

  return (
    <div className="relative inline-block md:hidden text-left">
      <div>
        <RiMenu3Line
          className=" text-3xl cursor-pointer font-extraBold text-black  right-5"
          onClick={() => setMenuVisible(!menuVisible)}
        />
      </div>
      {menuVisible && (
        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-primary-100 rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600">
              <span>Create Event</span>
            </Link>
            <Link
              to={`/profile/${id}`}
              onClick={() => setMenuVisible(false)}
              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <span>Profile</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
