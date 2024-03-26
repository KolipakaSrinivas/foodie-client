import React from "react";
import Banner from "../../components/Banner";
import Catagories from "./Catagories";
import SpecialDishes from "./SpecialDishes";
import OurServices from "./OurServices";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Catagories />
      <SpecialDishes />
      <Testimonials />
      <OurServices />
    </div>
  );
};

export default Home;
