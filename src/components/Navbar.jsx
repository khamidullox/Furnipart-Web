import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-primary-yellow">
      <div className="navbar bg-base-100  px-5 aligen-content bg-primary-yellow">
        <div className="sm:navbar-start">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="size-16" />
          </Link>
        </div>
        <div className="navbar-center ">
          <div className="">
            <span className="text-white flex flex-col justify-center items-center lg:text-4xl text-xl">
              Furnipart
            </span>{" "}
            <span className="lg:text-lg text-black md:flex hidden">
              mebel aksessuarlari
            </span>
          </div>
        </div>
        <div className="navbar-end">
          <Link
            to="/sale"
            className="bg-secondary-red lg:p-4 md:p-3 p-1.5 text-white discount-badge test-shake"
          >
            <h2 className="">Chegirma</h2>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
