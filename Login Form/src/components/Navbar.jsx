import React from "react";
import Logo from "../assets/Logo.png";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-5 py-4 font-Poppins">

        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-10" />
          <span className="text-xl font-medium">Nazish's UI</span>
        </div>

        <div>
          <IoMenu className="text-3xl md:hidden" />
        </div>

      </nav>
    </>
  );
};

export default Navbar;
