import React from "react";
// import Banner from "../components/Banner";
<<<<<<< HEAD:client/src/pages/Home.jsx
import Categories from "../components/Categories";
import EventsSection from "../components/EventsSection";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import Poll from "../components/Poll";

=======
import Categories from "../../components/home/Categories";
import EventsSection from "../../components/home/EventsSection";
import Banner from "../../components/home/Banner";
import Testimonials from "../../components/home/Testimonials";
>>>>>>> f149a3eaf73a802c0d4605c914eae3a3a327f76a:client/src/_root/pages/Home.jsx

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
