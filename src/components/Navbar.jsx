import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
function Navbar() {
  const { product } = useSelector((state) => state.cart);
  console.log(product);
  return (
    <header className="bg-primary-yellow md:px-16">
      <div className="navbar bg-base-100 bg-primary-yellow">
        <div className="navbar-start">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="size-16 " />
          </Link>
          <Link to="/" className="">
            <span className="text-white flex flex-col justify-center items-center lg:text-4xl text-xl">
              Furnipart
            </span>{" "}
            <span className="lg:text-lg text-black md:flex hidden">
              mebel aksessuarlari
            </span>
          </Link>
        </div>
        <div className="navbar-center md:flex hidden ">
          <Link
            to="/all"
            className=" md:text-xl  text-sm link hover:text-white w-16 md:w-full"
          >
            Barcha mahsulotlar
          </Link>
        </div>
        <div className="navbar-end gap-5">
          <Link
            className="btn btn-circle text-3xl relative size-12 "
            to="/cart"
          >
            <AiOutlineShoppingCart className="" />
            <span className=" absolute text-sm -top-1 px-1 bg-red-600 text-white rounded-full -left-2">
              {product.length}
            </span>
          </Link>
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
