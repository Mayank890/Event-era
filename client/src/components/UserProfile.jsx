import React, { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";

const UserProfile = () => {
  const [editProfile, setEditProfile] = useState(false);
  return (
    <div
      className="mt-20 ml-8 border-2 rounded-xl w-2/6 mb-72 panel"
      id="Profile"
    >
      <section className="justify-center p-8 ">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold text-gray-800">
            Account Details
          </h3>
          <div
            className="flex items-center text-2xl cursor-pointer"
            onClick={() => setEditProfile(!editProfile)}
          >
            <MdOutlineModeEdit className="text-primary-500" />
            <span> Edit</span>
          </div>
        </div>
        {!editProfile ? (
          <div className="flex flex-col gap-5 mt-5">
            <div className="font-bold py-3 ">
              <label
                htmlFor="name"
                className="text-2xl py-2.5 font-semibold text-gray-800"
              >
                Name
              </label>
              <h3 className="h-10 py-2.5  text-xl w-full focus-visible:outline-none">
                Baba ramdev
              </h3>
            </div>
            <div className="font-bold py-3 ">
              <label
                htmlFor="Email"
                className="text-2xl py-2.5 font-semibold text-gray-800"
              >
                Email
              </label>
              <h3 className=" h-10 py-2.5  text-xl w-full focus-visible:outline-none">
                ramdev123@gmail.com
              </h3>
            </div>
            <div className="font-bold py-2.5 ">
              <label
                htmlFor="mobile"
                className="text-2xl py-2.5 font-semibold text-gray-800"
              >
                Mobile No
              </label>
              <h3 className=" h-10 py-2.5 text-xl w-full focus-visible:outline-none">
                1232425262
              </h3>
            </div>
            <div className="invisible text-center mb-13 text-primary-500 ">
              <button
                type="submit"
                id="submit"
                className="py-3 px-7 text-xl font-semibold border-2 rounded-full focus-visible:outline-none  hover:bg-red-500 hover:text-white"
                value="Save"
              />
            </div>
          </div>
        ) : (
          <form className="flex flex-col gap-5 mt-5">
            <div className="font-bold py-3 ">
              <label
                htmlFor="name"
                className="text-2xl py-2.5 font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className=" h-10 py-2.5 border-b text-xl w-full focus-visible:outline-none"
                placeholder="Komal Mehra"
              />
            </div>
            <div className="font-bold py-3 ">
              <label
                htmlFor="Email"
                className="text-2xl py-2.5 font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="Email"
                className="h-10 py-2.5 border-b text-xl w-full focus-visible:outline-none"
                placeholder="komal@gmail.com"
              />
            </div>
            <div className="font-bold py-2.5 ">
              <label
                htmlFor="mobile"
                className="text-2xl py-2.5 font-semibold text-gray-800"
              >
                Mobile No
              </label>
              <input
                type="number"
                id="mobile"
                maxLength="10"
                className=" h-10 py-2.5 border-b text-xl w-full focus-visible:outline-none"
                placeholder="635123663"
              />
            </div>
            <div className="text-center mb-13  ">
              <input
                type="submit"
                id="submit"
                className="py-3 px-7 text-xl font-semibold border-2 rounded-full focus-visible:outline-none  hover:bg-red-500 hover:text-white"
                value="Save"
              />
            </div>
          </form>
        )}
      </section>
      {/* </div> */}
    </div>
  );
};

export default UserProfile;
