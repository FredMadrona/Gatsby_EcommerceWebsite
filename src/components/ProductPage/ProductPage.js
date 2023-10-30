import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { BsCart2, BsHeart } from "react-icons/bs";

const ProductGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const allProducts = [
    {
      id: 1,
      name: "Stainless Steel Bathroom Hardware Black",
      color: "Black",
      price: "Php 1,000.00",
      img: data.allFile.nodes[0].childImageSharp.fluid,
    },
    {
      id: 2,
      name: "Exposed Door Closer Series Navy",
      color: "Navy",
      price: "Php 500.00",
      img: data.allFile.nodes[1].childImageSharp.fluid,
    },
    {
      id: 3,
      name: "Intelligent Door Lock N6700 Khaki",
      color: "Khaki",
      price: "Php 800.00",
      img: data.allFile.nodes[2].childImageSharp.fluid,
    },
    {
      id: 4,
      name: "Stainless Steel Bathroom Hardware lock Wheat",
      color: "Wheat",
      price: "Php 500.00",
      img: data.allFile.nodes[3].childImageSharp.fluid,
    },
    {
      id: 5,
      name: "Stainless Steel Bathroom Hardware Orange/Navy",
      color: "Orange/Navy",
      price: "Php 500.00",
      img: data.allFile.nodes[0].childImageSharp.fluid,
    },
    {
      id: 6,
      name: "Stainless Steel Bathroom Hardware lock Yellow",
      color: "Yellow",
      price: "Php 1,000.00",
      img: data.allFile.nodes[2].childImageSharp.fluid,
    },
    {
      id: 7,
      name: "Exposed Door Closer Series Stone",
      color: "Stone",
      price: "Php 500.00",
      img: data.allFile.nodes[0].childImageSharp.fluid,
    },
    {
      id: 8,
      name: "Intelligent Door Lock N6700 Black",
      color: "Black",
      price: "Php 800.00",
      img: data.allFile.nodes[2].childImageSharp.fluid,
    },
    {
      id: 9,
      name: "Exposed Door Closer Series Navy",
      color: "Navy",
      price: "Php 500.00",
      img: data.allFile.nodes[1].childImageSharp.fluid,
    },
  ];

  const [selectedColors, setSelectedColors] = useState([]); // State for selected colors
  const [products, setProducts] = useState([]); // State for filtered products

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

  const [colorVisible, setColorVisible] = useState(false);
  const [brandVisible, setBrandVisible] = useState(false);
  const [priceVisible, setPriceVisible] = useState(false);
  const [featureVisible, setFeatureVisible] = useState(false);
  const [categoriesVisible, setCategoriesVisible] = useState(false);

  const toggleBrand = () => {
    setBrandVisible(!brandVisible);
  };

  const togglePrice = () => {
    setPriceVisible(!priceVisible);
  };
  
  const toggleFeature = () => {
    setFeatureVisible(!featureVisible);
  };
  
  const toggleCategories = () => {
    setCategoriesVisible(!categoriesVisible);
  };

  const toggleColor = () => {
    setColorVisible(!colorVisible);
  };

  return (
    <div className="bg-gray-100 p-4 grid grid-cols-9 gap-4 ">
      <div className="col-span-1"></div>
      {/* Filter Checkbox */}
      <div className=" col-span-3 lg:col-span-2 flex flex-col start  items-start">
        <h3 className=" text-md text-left text-primary font-semibold cursor-pointer">
          Shopping Options
        </h3>
        <div className="space-y-2  mt-5 w-full pr-5 ">
        {/**Brand Container */}
        <div className="accordion">
            <div className="accordion-section">
              <div
                className="accordion-header flex justify-between align-center mb-3 cursor-pointer"
                onClick={toggleBrand}
              >
                <h2 className="font-semibold"> Brand </h2>
                {brandVisible ? (
                  <FaChevronDown className="mt-1 hover:cursor-pointer" />
                ) : (
                  <FaChevronUp className="mt-1 hover:cursor-pointer" />
                )}
              </div>
              <div className={`accordion-content p-2 transition duration-300 ${brandVisible ? '' : 'hidden'}` }>
                      
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

              </div>

            </div>
          </div>

          {/** Colour Container */}
          <div className="accordion">
            <div className="accordion-section">
              <div
                className="accordion-header flex justify-between align-center mb-3 cursor-pointer"
                onClick={toggleColor}
              >
                <h2 className="font-semibold"> Colour </h2>
                {colorVisible ? (
                  <FaChevronDown className="mt-1 hover:cursor-pointer" />
                ) : (
                  <FaChevronUp className="mt-1 hover:cursor-pointer" />
                )}
              </div>
              <div className={`accordion-content p-2 transition duration-300 ${colorVisible ? '' : 'hidden'}` }>
                      
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

              </div>

            </div>
          </div>

          {/** Price */}
          <div className="accordion">
            <div className="accordion-section">
              <div
                className="accordion-header flex justify-between align-center mb-3 cursor-pointer"
                onClick={togglePrice}
              >
                <h2 className="font-semibold"> Price </h2>
                {priceVisible ? (
                  <FaChevronDown className="mt-1 hover:cursor-pointer" />
                ) : (
                  <FaChevronUp className="mt-1 hover:cursor-pointer" />
                )}
              </div>
              <div className={`accordion-content p-2 transition duration-300 ${priceVisible ? '' : 'hidden'}` }>
                      
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

              </div>

            </div>
          </div>

          {/** Feature */}
          <div className="accordion">
            <div className="accordion-section">
              <div
                className="accordion-header flex justify-between align-center mb-3 cursor-pointer"
                onClick={toggleFeature}
              >
                <h2 className="font-semibold"> Feature </h2>
                {featureVisible ? (
                  <FaChevronDown className="mt-1 hover:cursor-pointer" />
                ) : (
                  <FaChevronUp className="mt-1 hover:cursor-pointer" />
                )}
              </div>
              <div className={`accordion-content p-2 transition duration-300 ${featureVisible ? '' : 'hidden'}` }>
                      
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

              </div>

            </div>
          </div>


          <div className="accordion">
            <div className="accordion-section">
              <div
                className="accordion-header flex justify-between align-center mb-3 cursor-pointer"
                onClick={toggleCategories}
              >
                <h2 className="font-semibold"> Categories </h2>
                {categoriesVisible ? (
                  <FaChevronDown className="mt-1 hover:cursor-pointer" />
                ) : (
                  <FaChevronUp className="mt-1 hover:cursor-pointer" />
                )}
              </div>
              <div className={`accordion-content p-2 transition duration-300 ${categoriesVisible ? '' : 'hidden'}` }>
                      
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

              </div>

            </div>
          </div>
          {/* Add more checkbox options for colors as needed */}
        </div>
      </div>

      {/* Products */}
      <div className="col-span-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:border-primary"
            >
              <Img fluid={product.img} alt={product.name} />

              <p className="text-sm text-gray-500 mb-3 h-10">
                {product.name} <div className="space-y-2"> </div>
              </p>
              <div className="flex justify-between mb-3">
                <p className="text-sm font-semibold">{product.price}</p>
                <p>
                  <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
                </p>{" "}
                {/* Heart Icon */}
              </div>
              <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
                Add to cart <BsCart2 className="mx-2" />
                {/* Cart Icon */}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
