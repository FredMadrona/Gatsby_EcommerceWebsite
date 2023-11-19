import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Link } from "gatsby";

const ProductOptions = () => {
  const options = ["Small", "Medium", "Large"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
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
      <div className="grid grid-cols-1 lg:grid-cols-2 m-5 mx-[60px]">
        <div className="cols-span-1">
          <div className="flex w-full justify-center mb-5">
            <StaticImage
              src="../ProductImages/Hardware04.jpg"
              className="m-5 w-3/4 h-[500px] cursor-pointer "
            ></StaticImage>
          </div>
          <div className="grid grid-cols-4 px-[90px] gap-3 w-full">
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

        <div className="cols-span-1">
          <div className="w-3/4 mt-5">
            <h1 className="text-2xl text-black text-left font-bold cursor-pointer">
              {" "}
              Stainelss Steel Bathroom Hardware WWG17220
            </h1>
          </div>
          <div className="w-3/4 mt-2">
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
              className="border border-gray-400 p-1  px-2 flex items-between justify-between w-1/2 mt-5 cursor-pointer "
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
                    className={
                      ("p-2 cursor-pointer hover:bg-gray-200 text-end",
                      option === selectedOption && "bg-gray-200")
                    }
                  >
                    <button
                      type="button"
                      onClick={() => selectOption(option)}
                      className="w-full h-full"
                    >
                      {option}
                    </button>
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
                aria-label="Color: Light Orange"
              ></button>
              <button
                className="rounded-full cursor-pointer p-5 border border-gray-400"
                style={{ backgroundColor: "#333333" }}
                aria-label="Color: Dark Gray"
              ></button>
              <button
                className="rounded-full cursor-pointer p-5 border border-gray-400"
                style={{ backgroundColor: "#666633" }}
                aria-label="Color: Olive Green"
              ></button>
            </div>
          </div>
          <div className="mt-5 w-3/4  ">
            <p className="font-semibold text-md mb-3"> Quantity: </p>
            <div className="grid grid-cols-2 gap-1 justify-start">
              <div className="cols-span-1 rounded flex flex-row">
                <button
                  className="text-md px-[20px] text-gray-500 border border-gray-500 flex items-center justify-center"
                  onClick={decreaseQuantity}
                >
                  {" "}
                  -{" "}
                </button>

                <span className="text-md  border border-gray-500 px-[20px] text-lg flex items-center">
                  {" "}
                  {quantity}
                </span>
                <button
                  className="text-md px-[20px]   border border-gray-500  text-lg flex items-center"
                  onClick={increaseQuantity}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
              <div className="cols-span-1 ">
               <Link to="../Cart"> <button className="bg-black text-white font-semibold text-sm text-center p-2 w-full">
                  {" "}
                  Add to Cart
                </button> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
