import React from "react";
// import Banner from "../components/Banner";
import Categories from "../components/Categories";
import EventsSection from "../components/EventsSection";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import Poll from "../components/Poll";


const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <EventsSection />
      <Testimonials />
      <Poll />

    </div>
  );
};

export default Home;
