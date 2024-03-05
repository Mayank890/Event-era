import React from "react";

const AttendedEvents = () => {
  const eventDivStyle = {
    height: "620px", // adjust height as needed
    overflow: "auto", // or 'scroll' for always visible scrollbar
  };
  return (
    <div className=" ml-8 p-8 mb-72 active" style={eventDivStyle} id="attended">
      <div className="font-semibold text-xl mb-8">
        <h3>Past 6 months</h3>
      </div>
      <div className="flex mb-6 border p-6 rounded-xl">
        <div className="w-44 pr-13 me-14">
          {/* <img src={a2} alt="post2" className="object-cover h-full"></img> */}
        </div>
        <div className="text-left">
          <h3 className="text-xl font-bold pb-7">Technical Event</h3>
          <span className="py-2 mb-2 flex text-lg items-start">
            {/* <img src={time} alt="time" className="pr-4 items-start"></img> */}
            3rd Feb 2024 | 6:00 P.M.
          </span>
          <span className="py-2 mb-2 flex text-lg">
            {/* <img src={location} alt="location" className="pr-4"></img>HK */}
            Mall, Naranpura, Ahmedabad
          </span>
          <spam className="flex justify-between">
            <span className="flex py-2 pr-64 mb-2 text-xl">
              {/* <img src={rupee} alt="rupee" className="pr-4 pl-2"></img> */}
              2000
            </span>
            <button className="flex rounded-full border-2 items-center py-3 px-4 text-lg">
              {/* <img src={download} alt="download" className="pr-3"></img> */}
              Download Ticket
            </button>
          </spam>
        </div>
      </div>
      <div className="flex mb-6 border p-6 rounded-xl">
        <div className="w-44 pr-13 me-14">
          {/* <img src={a2} alt="post2" className="object-cover h-full"></img> */}
        </div>
        <div className="text-left">
          <h3 className="text-xl font-bold pb-7">Technical Event</h3>
          <span className="py-2 mb-2 flex text-lg items-start">
            {/* <img src={time} alt="time" className="pr-4 items-start"></img> */}
            3rd Feb 2024 | 6:00 P.M.
          </span>
          <span className="py-2 mb-2 flex text-lg">
            {/* <img src={location} alt="location" className="pr-4"></img>HK */}
            Mall, Naranpura, Ahmedabad
          </span>
          <spam className="flex justify-between">
            <span className="flex py-2 pr-64 mb-2 text-xl">
              {/* <img src={rupee} alt="rupee" className="pr-4 pl-2"></img> */}
              2000
            </span>
            <button className="flex rounded-full border-2 items-center py-3 px-4 text-lg">
              {/* <img src={download} alt="download" className="pr-3"></img> */}
              Download Ticket
            </button>
          </spam>
        </div>
      </div>
      <div className="flex mb-6 border p-6 rounded-xl">
        <div className="w-44 pr-13 me-14">
          {/* <img src={a2} alt="post2" className="object-cover h-full"></img> */}
        </div>
        <div className="text-left">
          <h3 className="text-xl font-bold pb-7">Technical Event</h3>
          <span className="py-2 mb-2 flex text-lg items-start">
            {/* <img src={time} alt="time" className="pr-4 items-start"></img> */}
            3rd Feb 2024 | 6:00 P.M.
          </span>
          <span className="py-2 mb-2 flex text-lg">
            {/* <img src={location} alt="location" className="pr-4"></img>HK */}
            Mall, Naranpura, Ahmedabad
          </span>
          <spam className="flex justify-between">
            <span className="flex py-2 pr-64 mb-2 text-xl">
              {/* <img src={rupee} alt="rupee" className="pr-4 pl-2"></img> */}
              2000
            </span>
            <button className="flex rounded-full border-2 items-center py-3 px-4 text-lg">
              {/* <img src={download} alt="download" className="pr-3"></img> */}
              Download Ticket
            </button>
          </spam>
        </div>
      </div>
      <div className="flex mb-6 border p-6 rounded-xl">
        <div className="w-44 pr-13 me-14">
          {/* <img src={a2} alt="post2" className="object-cover h-full"></img> */}
        </div>
        <div className="text-left">
          <h3 className="text-xl font-bold pb-7">Technical Event</h3>
          <span className="py-2 mb-2 flex text-lg items-start">
            {/* <img src={time} alt="time" className="pr-4 items-start"></img> */}
            3rd Feb 2024 | 6:00 P.M.
          </span>
          <span className="py-2 mb-2 flex text-lg">
            {/* <img src={location} alt="location" className="pr-4"></img>HK */}
            Mall, Naranpura, Ahmedabad
          </span>
          <spam className="flex justify-between">
            <span className="flex py-2 pr-64 mb-2 text-xl">
              {/* <img src={rupee} alt="rupee" className="pr-4 pl-2"></img> */}
              2000
            </span>
            <button className="flex rounded-full border-2 items-center py-3 px-4 text-lg">
              {/* <img src={download} alt="download" className="pr-3"></img> */}
              Download Ticket
            </button>
          </spam>
        </div>
      </div>
    </div>
  );
};

export default AttendedEvents;
