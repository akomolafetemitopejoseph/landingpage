import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openBtn, setOpenbtn] = useState(false);

  const togglebtnopen = () => {
    setOpenbtn(!openBtn);
  };

  return (
    <div className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div
          className="flex justify-between items-center
        "
        >
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="my logp" />
            <span
              className="text-xl tracking-tight
            "
            >
              virtualR
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 capitalize">
            <Link to="features" smooth={true} duration={1000}>
              <li>featurs</li>
            </Link>
            <Link to="work" smooth={true} duration={1000}>
              <li>workflow</li>
            </Link>
            <Link to="price" smooth={true} duration={1000}>
              <li>price</li>
            </Link>
            <Link to="test" smooth={true} duration={1000}>
              <li>testimonials</li>
            </Link>
          </ul>
          <div
            className="hidden lg:flex justify-center space-x-12 items-c
          "
          >
            <a href="#" className="py-2 px-3 border rounded-md">
              sign in
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              create an account
            </a>
          </div>
          <div
            className="lg:hidden
           md:flex flex-col justify-end"
          >
            <button onClick={togglebtnopen}>
              {openBtn ? (
                <X onClick={togglebtnopen} />
              ) : (
                <Menu onClick={togglebtnopen} />
              )}
            </button>
          </div>
        </div>
        <div>
          {openBtn && (
            <div className="fixed right-0 z-0 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul className="capitalize text-2xl font-bold">
                <Link to="features" smooth={true} duration={1000}>
                  <li className="py-4">features</li>
                </Link>
                <Link to="work" smooth={true} duration={1000}>
                  <li className="py-4">workflow</li>
                </Link>
                <Link to="price" smooth={true} duration={1000}>
                  <li className="py-4">price</li>
                </Link>
                <Link to="test" smooth={true} duration={1000}>
                  <li className="py-4">testimonials</li>
                </Link>
              </ul>
              <div className="flex space-x-6">
                <a href="#" className="py-2 px-2 border rounded-md">
                  {" "}
                  sign in
                </a>
                <a
                  href="#"
                  className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
                >
                  {" "}
                  create an account
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
