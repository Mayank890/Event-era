import moment from "moment/moment";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";

const EventItem = ({ event }) => {
  const url = "https://api.theeventera.live/";
  return (
    <div className="p-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white/100  rounded-lg  drop-shadow-xl  transition ">
      <div className=" h-[308px] rounded-sm overflow-hidden">
        <img
          src={`${url}${event.poster_img}`}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2">
        <h2 className="text-2xl text-ellipsis  text-gray-800 font-easy">
          {event.event_name}
        </h2>
        <ul className="text-base mt-5 text-gray-700">
          <li className="flex gap-1 items-center">
            <CiCalendarDate size={20} />{" "}
            <span>{moment(event.event_date).format("MMMM DD, YYYY")}</span> |{" "}
            <span>{event.event_time}</span>
          </li>
          <li className="flex gap-1 items-center mt-1">
            <CiLocationOn size={20} /> <span>{event.city}</span>
          </li>
        </ul>
        <div className="flex items-center mt-3  justify-between mb-5 mx-3">
          <h3 className="text-lg text-gray-800 flex items-center  font-medium">
            <MdOutlineCurrencyRupee /> {event.price}
          </h3>
          <Link
            to={`/events/${event._id}`}
            className="py-3 px-12 text-base font-light  text-primary-500 hover:bg-primary-500 border-[1px] transition border-primary-500 hover:text-white rounded-3xl"
          >
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
