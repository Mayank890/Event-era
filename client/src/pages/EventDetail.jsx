import React from "react";

import { MdKeyboardArrowLeft } from "react-icons/md";

export default function EventDetail() {
  return (
    <div className="mx-8 ">
      <div className="mb-8">
        <div
          href="google.com"
          className="flex text-xl items-center font-bold cursor-pointer"
          onClick={() => window.history.back()}
        >
          <MdKeyboardArrowLeft size={25} />
          Back
        </div>
      </div>
      <div className="mb-8">
        <div className="content-center">
          <img
            src="https://images.unsplash.com/photo-1709423377982-fbe2169e5b67?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="banner"
            className="rounded-2xl w-full h-full border-transparent border-r-5 object-cover"
            style={{ height: "486px" }}
          />
        </div>
      </div>

      <div className="p-3 border rounded-2xl mb-8 hover:border-red-500">
        <h5 className="2xl:text-2xl text-xl pb-3  font-semibold">
          More details: Music Event
        </h5>
        <p className="2xl:xl text-lg pb-3 leading-5 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos.
        </p>
        <div className="flex text-sm pb-6 2xl:text-base">
          <p className="flex 2xl:pr-4 pr-2">
            {/* <img src={call} alt="calender"></img> */}
            <span className="p-2">3rd of feb 2024</span>
          </p>
          <p className="flex 2xl:pr-4 pr-2">
            {/* <img src={clock} alt="time"></img> */}
            <span className="p-2">6:00pm</span>
          </p>
          <p className="flex 2xl:pr-4 pr-2">
            {/* <img src={location} alt="location"></img> */}
            <span className="p-2">Ahmedabad</span>
          </p>
        </div>
        <div className="flex">
          <p className="flex 2xl:pr-4 pr-2 mr-8 items-center">
            {/* <img src={rupee} alt="location"></img> */}
            <span className="2xl:text-2xl text-xl p-2 font-semibold">2000</span>
          </p>
          <a
            href=""
            className="text-base px-6 py-3 border-2 rounded-full font-semibold hover:bg-red-500 hover:text-white"
          >
            Book Now
          </a>
        </div>
      </div>
      <div className="p-3 border rounded-2xl mb-8 hover:border-red-500">
        <h5 className="2xl:text-2xl text-xl pb-6  font-semibold">Artist</h5>
        <div className="block lg:flex justify-between p-3">
          <div className="flex pr-10 lg:mb-3">
            <div>
              <img
                src="https://images.unsplash.com/photo-1709136333082-f3ce4ad278a3?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="artist"
                className="rounded-full max-w-40 h-40"
              />
            </div>
            <div className="p-8">
              <h3 className="2xl:text-4xl font-semibold xl:3xl pb-2">
                John Smith
              </h3>
              <h4 className="2xl:text-4xl xl:3xl ">Musician</h4>
            </div>
          </div>

          <div className="w-9/12 my-auto ">
            <p className="break-words 2xl:text-2xl xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
        </div>
      </div>
      <div className="p-3 border rounded-2xl mb-8 hover:border-red-500">
        <h5 className="2xl:text-2xl text-xl pb-6 font-semibold">Location</h5>
        <div className="block p-3 mx-auto">
          {/* <Map google={this.props.google} zoom={14}>
            <Marker onClick={this.onMarkerClick} name={"Current location"} />

            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14683.1238463749!2d72.52381841014422!3d23.06849059576108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9cb250f37723%3A0x27de8effab4879ed!2sMarengo%20CIMS%20Hospital!5e0!3m2!1sen!2sin!4v1709541213390!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            className="mx-auto"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
