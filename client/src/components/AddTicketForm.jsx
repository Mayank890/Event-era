import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import moment from "moment/moment";

const AddTicketForm = ({ isBlock, event }) => {
  const [ticketCount, setTicketCount] = useState(1);

  const handleIncrement = () => {
    setTicketCount(ticketCount + 1);
  };

  const handleDecrement = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  const subTotal = ticketCount * event.price;
  const gst = subTotal * 0.1;
  const totalAmount = subTotal + gst;

  return (
    <div className="fixed bg-black/80 z-50 inset-x-0 inset-y-0 w-full  flex justify-center items-center">
      <div className="w-[487px] h-[615.08px] relative  p-8 rounded-lg border border-solid border-gray-300 mx-auto my-auto bg-white shadow-md mb-8 flex flex-col mt-9">
        <IoIosCloseCircle
          className="absolute top-0 right-0 text-red-500 hover:text-red-800 cursor-pointer"
          size={30}
          onClick={() => isBlock(false)}
        />
        <h2 className="text-2xl font-semibold mb-2">{event.event_name}</h2>
        <p className="text-red-500 mb-4">
          {ticketCount} ticket{ticketCount !== 1 ? "s" : ""}
        </p>
        <hr className="mb-5 border-gray-400" />

        <div className="mb-4">
          <div className="flex items-center text-gray-600 mb-3">
            {/* <CalendarIcon className="h-5 w-5 mr-1" /> */}
            <p>
              {moment(event.event_date).format("MMMM DD, YYYY")}|{" "}
              {event.event_time}
            </p>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            {/* <LocationMarkerIcon className="h-5 w-5 mr-1" /> */}
            <p>{event.city}</p>
          </div>
        </div>
        <hr className="mb-5 border-gray-400" />

        <div className="mb-4 text-gray-600 flex flex-col">
          <div className="flex justify-between">
            <label className="block mb-2 mr-2">Number of Tickets:</label>
            <div className="flex items-center">
              <button
                className="px-2 border border-red-500 group font-bold hover:bg-red-400 hover:border-red-700"
                onClick={handleDecrement}
              >
                <span className="text-lg text-red-500 group-hover:text-white">
                  -
                </span>
              </button>
              <span className="px-2  py-1">{ticketCount}</span>
              <button
                className="px-2 border border-red-500 group  font-bold hover:bg-red-400 hover:border-red-700"
                onClick={handleIncrement}
              >
                <span className="text-lg text-red-500 group-hover:text-white  ">
                  +
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mb-4 text-gray-600 flex flex-col">
          <div className="flex justify-between">
            <p className="mb-5">Sub total:</p>
            <p className="mb-5">&#x20B9;{subTotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="mb-5">GST (10%):</p>
            <p className="mb-5">&#x20B9;{gst.toFixed(2)}</p>
          </div>
          <hr className="my-2 border-dotted border-gray-400" />
          <div className="flex justify-between">
            <p className="font-semibold ">Total Amount:</p>
            <p className="font-semibold mb-2">
              &#x20B9;{totalAmount.toFixed(2)}
            </p>
          </div>
        </div>
        <hr className="mb-4 border-gray-400" />
        <div className="flex items-center mb-7">
          {/* <InformationCircleIcon className="h-5 w-5 mr-1 text-black" /> */}
          <p className="text-sm text-gray-600">
            I hereby acknowledge my agreement to finalize this transaction by
            proceeding.
          </p>
        </div>
        <button className="w-full py-2 rounded bg-red-500 text-white hover:bg-red-600">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default AddTicketForm;
