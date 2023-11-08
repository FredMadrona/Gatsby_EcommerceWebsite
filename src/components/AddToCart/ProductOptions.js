import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const ProductOptions = () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="mt-[25px]">
      <div className=" ml-[150px]">
        <span className="text-sm text-gray-500 cursor-pointer hover:text-primary">
          Home /
        </span>
        <span className="text-sm text-gray-500 cursor-pointer hover:text-primary">
          {" "}
          Cateogry /
        </span>
        <span className="text-sm text-gray-500 cursor-pointer hover:text-primary">
          {" "}
          Shop /
        </span>
        <span className="text-sm text-gray-500 cursor-pointer hover:text-primary">
          {" "}
          Stainless Steel Bathroom Hardware WWG17220{" "}
        </span>
      </div>
      <div className="grid grid-cols-2 m-5 mx-[60px]">
        <div className="cols-span-1">
          <div className="flex border w-full justify-center mb-5">
            <StaticImage
              src="../ProductImages/Hardware04.jpg"
              className="m-5 w-3/4 h-[500px] cursor-pointer border"
            ></StaticImage>
          </div>
          <div className="grid grid-cols-4 px-[75px] gap-3 border w-full">
            <div className="col-span-1 border hover:shadow-md border-black p-3 ">
              <StaticImage
                src="../ProductImages/Hardware04.jpg"
                className="hover:cursor-pointer "
              ></StaticImage>
            </div>
            <div className="col-span-1 border hover:shadow-md border-black p-3 ">
              <StaticImage
                src="../ProductImages/Hardware04.jpg"
                className="hover:cursor-pointer "
              ></StaticImage>
            </div>
            <div className="col-span-1 border hover:shadow-md border-black p-3 ">
              <StaticImage
                src="../ProductImages/Hardware04.jpg"
                className="hover:cursor-pointer "
              ></StaticImage>
            </div>
            <div className="col-span-1 border hover:shadow-md border-black p-3 ">
              <StaticImage
                src="../ProductImages/Hardware04.jpg"
                className="hover:cursor-pointer "
              ></StaticImage>
            </div>
          </div>
        </div>

        <div className="cols-span-1 border">
          <div className="w-3/4 border mt-5">
            <h1 className="text-2xl text-black text-left font-bold cursor-pointer">
              {" "}
              Stainelss Steel Bathroom Hardware WWG17220
            </h1>
          </div>
          <div className="w-3/4 mt-5">
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="mt-5">
            <h6 className="font-semibold text-md mb-3"> Price:</h6>
            <p className="text-xl font-bold"> 0.00</p>
          </div>
          <div className="my-5">
            <p className="font-semibold text-md cursor-pointer"> Sizes:</p>
            <div
              onClick={toggleDropdown}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === "Space") {
                  toggleDropdown();
                }
              }}
              role="button"
              tabIndex={0}
              className="border border-gray-400 p-3 flex items-between justify-between w-1/2 mt-5 cursor-pointer"
            >
              {selectedOption ? selectedOption : "Select Size"}
              {isOpen ? (
                <FaChevronDown className=" mt-1 hover:cursor-pointer" />
              ) : (
                <FaChevronUp className=" mt-1 hover:cursor-pointer" />
              )}
            </div>
            {/*   */}
            {isOpen && (
              <ul className="bg-white border border-gray-300 w-1/2 cursor-pointer shadow-lg">
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={() => selectOption(option)}
                    className={
                      ("p-2 cursor-pointer hover:bg-gray-200",
                      option === selectedOption && "bg-gray-200")
                    }
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mt-5">
            <p className="font-semibold text-md mb-3"> Colours: </p>
            <div className="flex flex-row gap-5">
              <button
                className="rounded-full cursor-pointer p-5 border border-gray-400"
                style={{ backgroundColor: "#ffcc99" }}
              ></button>
              <button
                className="rounded-full cursor-pointer p-5 border border-gray-400"
                style={{ backgroundColor: "#333333" }}
              ></button>
              <button
                className="rounded-full cursor-pointer p-5 border border-gray-400"
                style={{ backgroundColor: "#666633" }}
              ></button>
            </div>
          </div>
          <div className="mt-5 w-1/2 border">
          <p className="font-semibold text-md mb-3"> Quantity: </p>
              <div className="grid grid-cols-2">
              <div className="cols-span-1 rounded flex flex-row ">
              <button className="text-lg px-5 text-gray-500 border border-gray-500 flex items-center justify-center"> - </button>

                <span className="text-lg  border border-gray-500 px-[28px] text-lg flex items-center"> 1 </span>
                <button className="text-lg  border border-gray-500 px-5 text-lg flex items-center"> + </button>
              </div> 
                <div className="cols-span-1">
                    <button className="bg-black text-white font-semibold text-lg text-center px-[30px]"> Add to Cart</button>

                  </div>    
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
