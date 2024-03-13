import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import EventItem from "./EventItem";

const EventsSection = () => {
  const [events, setEvents] = useState("popular");
  // const navigate = useNavigate();
  const ucEvents = [
    {
      event_name: "Live Singing Concert",
      poster_img:
        "https://images.unsplash.com/photo-1708112292874-1562bdd92f1e?q=80&w=3011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_date: "3rd",
      startTime: "6:00 PM",
      EndTIme: "9:00 PM",
      city: "H.K hall, Naranpura, Ahmedabad",
      price: 2000,
    },
    {
      event_name: "Live Singing Concert",
      poster_img:
        "https://plus.unsplash.com/premium_photo-1707988179922-bd01b4dcb826?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_date: "3rd",
      startTime: "6:00 PM",
      EndTIme: "9:00 PM",
      city: "H.K hall, Naranpura, Ahmedabad",
      price: 2000,
    },
    {
      event_name: "Live Singing Concert",
      poster_img:
        "https://images.unsplash.com/photo-1705785994423-88b5fb81b297?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_date: "3rd",
      startTime: "6:00 PM",
      EndTIme: "9:00 PM",
      city: "H.K hall, Naranpura, Ahmedabad",
      price: 2000,
    },
    {
      event_name: "Live Singing Concert",
      poster_img:
        "https://plus.unsplash.com/premium_photo-1705421624750-f9ebd095f53a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_date: "3rd",
      startTime: "6:00 PM",
      EndTIme: "9:00 PM",
      city: "H.K hall, Naranpura, Ahmedabad",
      price: 2000,
    },
    {
      event_name: "Live Singing Concert",
      poster_img:
        "https://images.unsplash.com/photo-1682695795557-17447f921f79?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_date: "3rd",
      startTime: "6:00 PM",
      EndTIme: "9:00 PM",
      city: "H.K hall, Naranpura, Ahmedabad",
      price: 2000,
    },
    {
      event_name: "Live Singing Concert",
      poster_img:
        "https://images.unsplash.com/photo-1708112292874-1562bdd92f1e?q=80&w=3011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_date: "3rd",
      startTime: "6:00 PM",
      EndTIme: "9:00 PM",
      city: "H.K hall, Naranpura, Ahmedabad",
      price: 2000,
    },
    {
      event_name: "Live Singing Concert",
      poster_img:
        "https://plus.unsplash.com/premium_photo-1707988179922-bd01b4dcb826?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_date: "3rd",
      startTime: "6:00 PM",
      EndTIme: "9:00 PM",
      city: "H.K hall, Naranpura, Ahmedabad",
      price: 2000,
    },
    {
      event_name: "Live Singing Concert",
      poster_img:
        "https://images.unsplash.com/photo-1705785994423-88b5fb81b297?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_date: "3rd",
      startTime: "6:00 PM",
      EndTIme: "9:00 PM",
      city: "H.K hall, Naranpura, Ahmedabad",
      price: 2000,
    },
  ];

  const pEvents = [
    {
      event_name: "Live Singing Concert",
      poster_img:
        "https://images.unsplash.com/photo-1708035900782-58f2815aa5bd?q=80&w=2716&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_date: "3rd",
      startTime: "6:00 PM",
      EndTIme: "9:00 PM",
      city: "H.K hall, Naranpura, Ahmedabad",
      price: 2000,
    },
    {
      event_name: "Live Singing Concert",
      poster_img:
        "https://images.unsplash.com/photo-1708149421696-d9fa65123f10?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_date: "3rd",
      startTime: "6:00 PM",
      EndTIme: "9:00 PM",
      city: "H.K hall, Naranpura, Ahmedabad",
      price: 2000,
    },
    {
      event_name: "Live Singing Concert",
      poster_img:
        "https://images.unsplash.com/photo-1707989327727-10c352b1b299?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_date: "3rd",
      startTime: "6:00 PM",
      EndTIme: "9:00 PM",
      city: "H.K hall, Naranpura, Ahmedabad",
      price: 2000,
    },
    {
      event_name: "Live Singing Concert",
      poster_img:
        "https://images.unsplash.com/photo-1701888281386-5ac0e1bb1ef4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_date: "3rd",
      startTime: "6:00 PM",
      EndTIme: "9:00 PM",
      city: "H.K hall, Naranpura, Ahmedabad",
      price: 2000,
    },
    {
      event_name: "Live Singing Concert",
      poster_img:
        "https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_date: "3rd",
      startTime: "6:00 PM",
      EndTIme: "9:00 PM",
      city: "H.K hall, Naranpura, Ahmedabad",
      price: 2000,
    },
    {
      event_name: "Live Singing Concert",
      poster_img:
        "https://images.unsplash.com/photo-1708035900782-58f2815aa5bd?q=80&w=2716&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_date: "3rd",
      startTime: "6:00 PM",
      EndTIme: "9:00 PM",
      city: "H.K hall, Naranpura, Ahmedabad",
      price: 2000,
    },
    {
      event_name: "Live Singing Concert",
      poster_img:
        "https://images.unsplash.com/photo-1708149421696-d9fa65123f10?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_date: "3rd",
      startTime: "6:00 PM",
      EndTIme: "9:00 PM",
      city: "H.K hall, Naranpura, Ahmedabad",
      price: 2000,
    },
    {
      event_name: "Live Singing Concert",
      poster_img:
        "https://images.unsplash.com/photo-1707989327727-10c352b1b299?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      event_date: "3rd",
      startTime: "6:00 PM",
      EndTIme: "9:00 PM",
      city: "H.K hall, Naranpura, Ahmedabad",
      price: 2000,
    },
  ];

  const [popularEvents, setPopularEvents] = useState(pEvents);
  const [upcomingEvents, setUpcomingEvents] = useState(ucEvents);

  return (
    <section className="w-full flex mt-8 flex-col px-8 container mx-auto">
      <header className="">
        <ul className="flex text-xl  text-grey-800">
          <li
            className={`cursor-pointer mr-4 pb-2 px-1 ${
              events === "popular"
                ? `border-b-primary-500 border-b-4 font-semibold`
                : `border-none font-normal`
            }`}
            onClick={() => setEvents("popular")}
          >
            Popular Events
          </li>
          <li
            className={`cursor-pointer mr-4  pb-2 px-1 ${
              events === "upcoming"
                ? `border-b-primary-500 border-b-4 font-semibold`
                : `border-none font-normal`
            }`}
            onClick={() => setEvents("upcoming")}
          >
            Upcoming Events
          </li>
        </ul>
      </header>
      <div className="flex w-full  gap-y-8 flex-wrap justify-center no-scrollbar mt-8">
        {events === "popular"
          ? popularEvents.map((event, index) => (
              <EventItem key={index} event={event} />
            ))
          : upcomingEvents.map((event, index) => (
              <EventItem key={index} event={event} />
            ))}
      </div>
      <a
        className="px-6 py-3 border-2 text-primary-500 border-primary-500 w-max mx-auto mt-9 rounded-3xl  hover:bg-primary-500 hover:text-white transition"
        href="/events"
      >
        View All Events
      </a>
    </section>
  );
};

export default EventsSection;
