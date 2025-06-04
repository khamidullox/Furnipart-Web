import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      {/* aligen-content */}
      <main className="aligen-content ">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
