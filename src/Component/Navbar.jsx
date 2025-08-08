import React, { useState } from "react";
import logo from "../assets/logo.svg";
import openbtn from "../assets/menue1.svg";
import menueX from "../assets/menueX.svg";

const Navbar = () => {
  const [openbtn, setOpenbtn] = useState(false);

  const [closebtn, setClosebtn] = useState("");

  const togglebtnopen = () => {
    setOpenbtn(openbtn);
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
            <li>featurs</li>
            <li>workflow</li>
            <li>price</li>
            <li>testimonials</li>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
