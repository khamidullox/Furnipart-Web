import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

function MainLayout() {
  return (
    <>
      {" "}
      <ScrollToTop />
      <Navbar />
      {/* aligen-content */}
      <main className="aligen-content mt-20">
        <picture>
          <source
            srcSet="/bg-logo-dark.png"
            media="(prefers-color-scheme: dark)"
            className="fixed -z-10 justify-center top-1/3 lg:left-1/3 opacity-70  lg:size-min md:w-96 md:left-1/4 w-48 left-1/4 "
          />

          <img
            src="/bg-logo.png"
            alt=""
            className="fixed -z-10 justify-center top-1/3 lg:left-1/3 opacity-70 lg:size-min md:w-96 md:left-1/4 w-48 left-1/4 
          "
          />
        </picture>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
