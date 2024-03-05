import React from "react";

const Footer = () => {
  return (
    <footer className="w-full  border-t-2 bg-primary-100/30 mt-10 p-8 font-poppins">
      <h4 className="text-xl font-semibold">About Us</h4>
      <div className="flex mt-5">
        <div className="">
          <ul className="font-thin">
            <li className="font-easy">Find Events</li>
            <li>Theatre</li>
            <li>Music</li>
            <li>Party</li>
            <li>More</li>
          </ul>
        </div>

        <p className="w-2/3  mx-auto leading-7 text-justify">
        paraLorem ipsum dolor sit amet, consectetur adipiscing elit Nunc vulputate libero 
et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent 
per conubia nostra, per inceptos himenaeos.graph 20px paraLorem ipsum dolor sit amet,
 consectetur adipiscing elit Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
Class aptent taciti sociosqu ad litora torquent per conubia 
nostra, per inceptos himenaeos.graph
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
