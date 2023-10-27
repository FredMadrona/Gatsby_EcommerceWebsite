import React, { useState } from "react";
import { FaBars} from "react-icons/fa";
import { BsCart2, BsPerson } from "react-icons/bs";  

const MenuButton = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="md:hidden flex justify-center ">
      <button className="text-primary text-lg " onClick={toggleMenu}>
        <FaBars />
      </button>
      {menuVisible && (
        <div className="bg-primary justify-start p-4 absolute top-20 left-0 right-0 z-10 h-1/2">
          {/* Menu content goes here */}
          <ul className="space-y-2 ">
            <li>
              <div className="flex w-full items-center space-x-8 ">
                <BsPerson className="text-white h-6 w-6" />
                <button className="text-white font-sm">Login / Sign up</button>
              </div>{" "}
            </li>
            <li>
            <div className="flex w-full items-center space-x-8 ">
              <svg
                className="h-8 w-8 text-white cursor-pointer pt-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <BsCart2 className="text-white h-6 w-6" />
              </svg>
              <p className="text-white">0.00</p>
              </div>
                 </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
