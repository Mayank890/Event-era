import React from "react";

const Testimonials = () => {
  return (
    <div>
      {/* <h3 className="text-xl">What people said</h3> */}
      <div className="gap-8 flex flex-col md:flex-row flex-wrap justify-center items-center mt-12">
        <div className="mb-8 text-center w-96 md:mb-0">
          <img
            className="w-48 h-48 mx-auto -mb-24 rounded-full object-cover"
            src="https://images.mid-day.com/images/images/2023/apr/hema-april-eight_d.jpg"
            alt="Avatar Jacky"
          />
          <div className="px-8 pt-32 pb-10 text-gray-600 bg-white rounded-lg shadow-lg">
            <h3 className="mb-3 text-xl text-gray-800 font-title">
              Jacky Pout
            </h3>
            <p className="mb-4 text-sm font-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique, quaerat!
            </p>
          </div>
        </div>
        <div className="text-center w-96">
          <img
            className="w-48 h-48 mx-auto -mb-24 rounded-full object-cover"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLJXNoBYMtNxOGtxvbHuTHhjLvEwjx3PhWsZ_H7-ydWLvixfAV"
            alt="Avatar Damien Marley"
          />
          <div className="px-8 pt-32 pb-10 text-gray-600 bg-white rounded-lg shadow-lg">
            <h3 className="mb-3 text-xl text-gray-800 font-title">
              Damien Marley
            </h3>
            <p className="mb-4 text-sm font-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              exercitationem.
            </p>
          </div>
        </div>
        <div className="text-center w-96">
          <img
            className="w-48 h-48 mx-auto -mb-24 rounded-full object-cover"
            src="https://media.licdn.com/dms/image/D4D03AQGixdSHsdONbw/profile-displayphoto-shrink_800_800/0/1705826653178?e=1715212800&v=beta&t=YNp6X1E_EUzor_qLUbHqE0trBcqu7VNuvTRtRsquFDw"
            alt="Avatar Damien Marley"
          />
          <div className="px-8 pt-32 pb-10 text-gray-600 bg-white rounded-lg shadow-lg">
            <h3 className="mb-3 text-xl text-gray-800 font-title">
              Damien Marley
            </h3>
            <p className="mb-4 text-sm font-body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, sit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
