import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";

const EventItem = ({ event }) => {
  return (
    <div className="p-1.5 bg-white/100 font-poppins rounded-lg  drop-shadow-xl  transition ">
      <div className="w-80 h-[308px] rounded-sm overflow-hidden">
        <img src={event.img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="p-2">
        <h2 className="text-2xl font-poppins text-gray-800 font-semibold">
          {event.title}
        </h2>
        <ul className="text-base mt-5 text-gray-700">
          <li className="flex gap-1 items-center">
            <CiCalendarDate size={20} />{" "}
            <span>{event.date + " " + event.month}</span> |{" "}
            <span>{event.startTime + " to " + event.EndTIme}</span>
          </li>
          <li className="flex gap-1 items-center mt-1">
            <CiLocationOn size={20} /> <span>{event.location}</span>
          </li>
        </ul>
        <div className="flex items-center mt-3  justify-between mb-5 mx-3">
          <h3 className="text-lg text-gray-800 flex items-center font-poppins font-medium">
            <MdOutlineCurrencyRupee /> {event.price}
          </h3>
          <a
            href="/event/yes"
            className="py-3 px-12 text-base font-light  text-primary-500 hover:bg-primary-500 border-[1px] transition border-primary-500 hover:text-white rounded-3xl"
          >
            Book
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
