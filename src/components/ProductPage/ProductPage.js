import React, { useState, useEffect } from "react";
import { BsCart2, BsHeart } from "react-icons/bs";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";

/**
import { useStaticQuery, graphql } from 'gatsby';

* 
* 
*/

function ProductFilter() {
  const [selectedColors, setSelectedColors] = useState([]); // State for selected colors
  const [products, setProducts] = useState([]); // State for filtered products

  // Sample product data with colors
  const allProducts = [
    {
      id: 1,
      name: "Stainless Steel Bathroom Hardware Black",
      color: "Black",
      price: "Php 1,000.00",
      image: '../ProductImages/Hardware01.jpg',
    },
    {
      id: 2,
      name: "Exposed Door Closer Series Navy",
      color: "Navy",
      price: "Php 500.00",
      image: "../ProductImages/Hardware02.jpg",
    },
    {
      id: 3,
      name: "Intelligent Door Lock N6700 Khaki",
      color: "Khaki",
      price: "Php 800.00",
      image: "../ProductImages/Hardware03.jpg",
    },
    {
      id: 4,
      name: "Stainless Steel Bathroom Hardware lock Wheat",
      color: "Wheat",
      price: "Php 500.00",
      image: "../ProductImages/Hardware04.jpg",
    },
    {
      id: 5,
      name: "Stainless Steel Bathroom Hardware Orange/Navy",
      color: "Orange/Navy",
      price: "Php 500.00",
      image: "../ProductImages/Hardware04.jpg",
    },
    {
      id: 6,
      name: "Stainless Steel Bathroom Hardware lock Yellow",
      color: "Yellow",
      price: "Php 1,000.00",
      image: "../ProductImages/Hardware01.jpg",
    },
    {
      id: 7,
      name: "Exposed Door Closer Series Stone",
      color: "Stone",
      price: "Php 500.00",
      image: "../ProductImages/Hardware02.jpg",
    },
    {
      id: 8,
      name: "Intelligent Door Lock N6700 Black",
      color: "Black",
      price: "Php 800.00",
      image: "../ProductImages/Hardware03.jpg",
    },
    {
      id: 9,
      name: "Exposed Door Closer Series Navy",
      color: "Navy",
      price: "Php 500.00",
      image: "../ProductImages/Hardware02.jpg",
    },
  ];

  // Function to filter products based on selected colors
  const filterProducts = () => {
    if (selectedColors.length === 0) {
      setProducts(allProducts); // Show all products when no color is selected
    } else {
      const filteredProducts = allProducts.filter((product) =>
        selectedColors.includes(product.color)
      );
      setProducts(filteredProducts);
    }
  };

  useEffect(() => {
    filterProducts(); // Call the filter function when the component mounts or when 'selectedColors' changes
  }, [selectedColors]);

  const handleColorChange = (event) => {
    const value = event.target.value;
    if (selectedColors.includes(value)) {
      // If the color is already selected, remove it
      setSelectedColors(selectedColors.filter((color) => color !== value));
    } else {
      // If the color is not selected, add it
      setSelectedColors([...selectedColors, value]);
    }
  };

  return (
    <div className="bg-gray-100 p-4 grid grid-cols-8 gap-4 ">
      <div className="col-span-1"></div>
      {/* Filter Checkbox */}
      <div className="lg:col-span-1 col-span-2 flex flex-col items-start ">
        <h3 className=" text-md text-left text-primary font-semibold cursor-pointer">
          Shopping Options
        </h3>
        <div className="space-y-2 mt-5 w-full">
          <div className="flex justify-between align-center mb-3 ">
            <h2 className="font-semibold "> Brand </h2>
            <FaAngleUp className="mt-1"> </FaAngleUp>
          </div>

          <div className="flex justify-between align-center mb-3 ">
            <h2 className="font-semibold"> Colour </h2>
            <FaAngleDown> </FaAngleDown>
          </div>
          <label className="flex items-center text-left">
            <input
              type="checkbox"
              value="Black"
              onChange={handleColorChange}
              checked={selectedColors.includes("Black")}
            />
            <span className="ml-2 text-gray-600 ">Black</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Navy"
              onChange={handleColorChange}
              checked={selectedColors.includes("Navy")}
            />
            <span className="ml-2 text-gray-600 ">Navy</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Khaki"
              onChange={handleColorChange}
              checked={selectedColors.includes("Khaki")}
            />
            <span className="ml-2 text-gray-600 ">Khaki</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Wheat"
              onChange={handleColorChange}
              checked={selectedColors.includes("Wheat")}
            />
            <span className="ml-2 text-gray-600 ">Wheat</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Orange/Navy"
              onChange={handleColorChange}
              checked={selectedColors.includes("Orange/Navy")}
            />
            <span className="ml-2 text-gray-600 ">Orange/Navy</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Yellow/Navy"
              onChange={handleColorChange}
              checked={selectedColors.includes("Yellow/Navy")}
            />
            <span className="ml-2 text-gray-600 ">Yellow/Navy</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="White"
              onChange={handleColorChange}
              checked={selectedColors.includes("White")}
            />
            <span className="ml-2 text-gray-600 ">White</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Orange"
              onChange={handleColorChange}
              checked={selectedColors.includes("Orange")}
            />
            <span className="ml-2 text-gray-600 ">Orange</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Yellow"
              onChange={handleColorChange}
              checked={selectedColors.includes("Yellow")}
            />
            <span className="ml-2 text-gray-600 ">Yellow</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Stone"
              onChange={handleColorChange}
              checked={selectedColors.includes("Stone")}
            />
            <span className="ml-2 text-gray-600 ">Stone</span>
          </label>
          <div className="flex justify-between align-center mb-3 ">
            <h2 className="font-semibold"> Price </h2>
            <FaAngleUp className="mt-1"> </FaAngleUp>
          </div>
          <div className="flex justify-between align-center mb-3 ">
            <h2 className="font-semibold"> Feature </h2>
            <FaAngleUp className="mt-1"> </FaAngleUp>
          </div>
          <div className="flex justify-between align-center  w-full">
            <h2 className="font-semibold"> Categories </h2>
            <FaAngleUp className="mt-1"> </FaAngleUp>
          </div>
          {/* Add more checkbox options for colors as needed */}
        </div>
      </div>

      {/* Products */}
      <div className="col-span-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow">
             
             <StaticImage src={product.image} alt="product image "></StaticImage>

              <p className="text-sm text-gray-500 mb-3">
                {product.name} <div className="space-y-2"> </div>
              </p>
              <div className="flex justify-between mb-3">
                <p className="text-sm font-semibold">{product.price}</p>
                <p>
                  <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
                </p>{" "}
                {/* Heart Icon */}
              </div>
              <button className="font-semibold text-black text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
                Add to cart <BsCart2 className="mx-2" />
                {/* Cart Icon */}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
