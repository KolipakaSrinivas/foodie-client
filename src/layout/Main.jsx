import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

export const Main = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Outlet />
      <footer>FOOTER</footer>
    </div>
  );
};
