
import React from "react";
import Logo from "./NavBarImages/Hardware_Logo.svg";
import { BsCart2, BsPerson, BsSearch } from "react-icons/bs";
import { Link } from "gatsby";
import MenuButton from "../NavBar/MenuButton";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full z-50 bg-white p-1 grid grid-cols-12 justify-between items-center gap-4 h-20 lg:px-1/4">
            
      {/* Column 1: Logo */}
      <div className="flex items-center justify-center col-span-4  ">
      <Link to="/" className=" hover:cursor-pointer ">
        <img
          src={Logo}
          alt="Logo"
          className="h-16 w-full"
        />
        </Link>
      </div>

      <div className="flex items center md:col-span-4 col-span-6">
        <div className="relative flex items-start q w-full ">
          <input
            type="text"
            placeholder="Search Hardwares"
            className="w-full bg-gray-100 pl-3 pr-10 py-2 rounded-lg text-gray-700 focus:outline-none focus:border-blue-300 placeholder-primary :text-xs"
          />
          <BsSearch className="absolute right-3 top-3 text-primary" />
        </div>
      </div>
      <div className="md:flex flex-no-wrap hidden items-start justify-center gap-4 w-full md:col-span-4 col-span-2  ">
        <div className="flex items-center  gap-2 lg:mr-5">
          <BsPerson className="h-6 w-6 text-primary " />
          <button className="text-primary text-md font-semibold ">
            Login / Sign up
          </button>
        </div>

        <div className="relative flex flex-row  items-center ">
          <svg
            className="h-8 w-8 text-primary cursor-pointer "
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <BsCart2 />
          </svg>
          <span className="absolute top-0 right-0 -mt-3 -mr-1 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
            0
          </span>
        </div>
        <p className="text-blue-primary">0.00</p>

        {/* Conditionally render the MenuButton component on medium screens */}
      </div>
      <MenuButton className="sm:col-span-0.5" />
    </nav>
  );
};

export default Navbar;
