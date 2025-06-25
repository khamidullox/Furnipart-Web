import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { useSelector } from "react-redux";
import { BsTelephone } from "react-icons/bs";

function Navbar() {
  const { product } = useSelector((state) => state.cart);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 100) {
        setShowNavbar(false); // Скроллим вниз — скрыть
      } else {
        setShowNavbar(true); // Вверх — показать
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } mb`}
    >
      <div className="navbar bg-primary-yellow px-4 md:px-16 shadow-lg">
        <div className="navbar-start">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="size-16" />
          </Link>
          <Link to="/">
            <span className="text-white flex flex-col items-start lg:text-4xl text-xl">
              Furnipart
            </span>
            <span className="lg:text-lg text-black md:flex hidden">
              mebel aksessuarlari
            </span>
          </Link>
        </div>

        <div className="navbar-center md:flex hidden">
          <Link to="/all" className="md:text-xl text-sm link hover:text-white">
            Barcha mahsulotlar
          </Link>
        </div>

        <div className="navbar-end gap-3">
          <Link className="btn btn-circle text-3xl relative size-12" to="/cart">
            <AiOutlineShoppingCart />
            <span className="absolute text-sm -top-1 px-1 bg-red-600 text-white rounded-full -left-2">
              {product.length}
            </span>
          </Link>
          <Link
            className="md:flex hidden"
            to="https://www.instagram.com/furnipart_uz/"
            target="_blank"
          >
            <FaInstagram className="btn btn-circle p-2 size-12" />
          </Link>
          <Link
            to="tel:998911249000"
            target="_blank"
            className="btn btn-circle size-12 md:flex hidden"
          >
            <BsTelephone className="text-3xl" />
          </Link>
          <Link
            to="/sale"
            className="bg-secondary-red lg:p-4 md:p-3 p-1.5 text-white discount-badge"
          >
            <h2>Chegirma</h2>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
