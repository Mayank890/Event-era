import React from "react";
// import Banner from "../components/Banner";
import Categories from "../components/Categories";
import EventsSection from "../components/EventsSection";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <EventsSection />
      <Testimonials />
    </div>
  );
};

export default Home;
