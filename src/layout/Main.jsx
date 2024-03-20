import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer>FOOTER</footer>
    </div>
  );
};
