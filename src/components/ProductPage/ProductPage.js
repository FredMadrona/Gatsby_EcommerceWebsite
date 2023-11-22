import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
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
      brand: "X",
      feature: "X",
      category: "Q",
      img: data.allFile.nodes[0].childImageSharp.fluid,
    },
    {
      id: 2,
      name: "Exposed Door Closer Series Navy",
      color: "Navy",
      price: "Php 500.00",
      brand: "Y",
      feature: "W",
      category: "B",
      img: data.allFile.nodes[1].childImageSharp.fluid,
    },
    {
      id: 3,
      name: "Intelligent Door Lock N6700 Khaki",
      color: "Khaki",
      price: "Php 800.00",
      brand: "Z",
      feature: "E",
      category: "C",
      img: data.allFile.nodes[2].childImageSharp.fluid,
    },
    {
      id: 4,
      name: "Stainless Steel Bathroom Hardware lock Wheat",
      color: "Wheat",
      price: "Php 500.00",
      brand: "Y",
      feature: "Q",
      category: "B",
      img: data.allFile.nodes[4].childImageSharp.fluid,
    },
    {
      id: 5,
      name: "Stainless Steel Bathroom Hardware Orange/Navy",
      color: "Orange/Navy",
      price: "Php 500.00",
      brand: "X",
      feature: "W",
      category: "C",
      img: data.allFile.nodes[0].childImageSharp.fluid,
    },
    {
      id: 6,
      name: "Stainless Steel Bathroom Hardware lock Yellow",
      color: "Yellow",
      price: "Php 1,000.00",
      brand: "Z",
      feature: "E",
      category: "A",
      img: data.allFile.nodes[1].childImageSharp.fluid,
    },
    {
      id: 7,
      name: "Exposed Door Closer Series Stone",
      color: "Stone",
      price: "Php 500.00",
      brand: "X",
      feature: "Q",
      category: "C",
      img: data.allFile.nodes[2].childImageSharp.fluid,
    },
    {
      id: 8,
      name: "Intelligent Door Lock N6700 Black",
      color: "Black",
      price: "Php 800.00",
      brand: "Y",
      feature: "W",
      category: "B",
      img: data.allFile.nodes[4].childImageSharp.fluid,
    },
    {
      id: 9,
      name: "Exposed Door Closer Series Navy",
      color: "Navy",
      price: "Php 500.00",
      brand: "Z",
      feature: "E",
      category: "A",
      img: data.allFile.nodes[0].childImageSharp.fluid,
    },
    {
      id: 10,
      name: "Stainless Steel Bathroom Hardware Black",
      color: "Black",
      price: "Php 200.00",
      brand: "X",
      feature: "Q",
      category: "A",
      img: data.allFile.nodes[1].childImageSharp.fluid,
    },
    {
      id: 11,
      name: "Exposed Door Closer Series Navy",
      color: "Navy",
      price: "Php 300.00",
      brand: "Y",
      feature: "W",
      category: "B",
      img: data.allFile.nodes[2].childImageSharp.fluid,
    },
    {
      id: 12,
      name: "Intelligent Door Lock N6700 Yellow",
      color: "Yellow",
      price: "Php 400.00",
      brand: "Z",
      feature: "Z",
      category: "E",
      img: data.allFile.nodes[4].childImageSharp.fluid,
    },
    {
      id: 13,
      name: "Stainless Steel Bathroom Hardware Black",
      color: "Black",
      price: "Php 500.00",
      brand: "X",
      feature: "Q",
      category: "A",
      img: data.allFile.nodes[0].childImageSharp.fluid,
    },
    {
      id: 14,
      name: "Exposed Door Closer Series Stone",
      color: "Stone",
      price: "Php 600.00",
      brand: "Y",
      feature: "W",
      category: "B",
      img: data.allFile.nodes[1].childImageSharp.fluid,
    },
    {
      id: 15,
      name: "Intelligent Door Lock N6700 Black",
      color: "Black",
      price: "Php 700.00",
      brand: "Z",
      feature: "E",
      category: "C",
      img: data.allFile.nodes[2].childImageSharp.fluid,
    },
    {
      id: 16,
      name: "Stainless Steel Bathroom Hardware Navy",
      color: "Navy",
      price: "Php 800.00",
      brand: "X",
      feature: "Q",
      category: "A",
      img: data.allFile.nodes[0].childImageSharp.fluid,
    },
    {
      id: 17,
      name: "Intelligent Door Lock N6700 Khaki",
      color: "Khaki",
      price: "Php 500.00",
      brand: "Y",
      feature: "W",
      category: "B",
      img: data.allFile.nodes[1].childImageSharp.fluid,
    },
    {
      id: 18,
      name: "Exposed Door Closer Series Wheat",
      color: "Wheat",
      price: "Php 400.00",
      brand: "Z",
      feature: "E",
      category: "C",
      img: data.allFile.nodes[2].childImageSharp.fluid,
    },
    {
      id: 19,
      name: "Stainless Steel Bathroom Hardware Orange/Navy",
      color: "Orange/Navy",
      price: "Php 1000.00",
      brand: "X",
      feature: "Q",
      category: "A",
      img: data.allFile.nodes[4].childImageSharp.fluid,
    },
    {
      id: 20,
      name: "Exposed Door Closer Series Yellow/Navy",
      color: "Yellow/Navy",
      price: "Php 800.00",
      brand: "Y",
      feature: "W",
      category: "B",
      img: data.allFile.nodes[0].childImageSharp.fluid,
    },
    {
      id: 21,
      name: "Intelligent Door Lock N6700 White",
      color: "White",
      price: "Php 500.00",
      brand: "Z",
      feature: "E",
      category: "C",
      img: data.allFile.nodes[1].childImageSharp.fluid,
    },
    {
      id: 22,
      name: "Stainless Steel Bathroom Hardware Orange",
      color: "Orange",
      price: "Php 800.00",
      brand: "X",
      feature: "Q",
      category: "A",
      img: data.allFile.nodes[2].childImageSharp.fluid,
    },
    {
      id: 23,
      name: "Exposed Door Closer Series Yellow",
      color: "Yellow",
      price: "Php 500.00",
      brand: "Y",
      feature: "W",
      category: "B",
      img: data.allFile.nodes[4].childImageSharp.fluid,
    },
    {
      id: 24,
      name: "Intelligent Door Lock N6700 Stone",
      color: "Stone",
      price: "Php 1000.00",
      brand: "Z",
      feature: "E",
      category: "C",
      img: data.allFile.nodes[0].childImageSharp.fluid,
    },
    {
      id: 25,
      name: "Stainless Steel Bathroom Hardware Black",
      color: "Black",
      price: "Php 500.00",
      brand: "X",
      feature: "Q",
      category: "A",
      img: data.allFile.nodes[1].childImageSharp.fluid,
    },
    {
      id: 26,
      name: "Exposed Door Closer Series Navy",
      color: "Navy",
      price: "Php 1000.00",
      brand: "Z",
      feature: "W",
      category: "B",
      img: data.allFile.nodes[2].childImageSharp.fluid,
    },
    {
      id: 27,
      name: "Intelligent Door Lock N6700 Khaki",
      color: "Khaki",
      price: "Php 800.00",
      brand: "X",
      feature: "E",
      category: "C",
      img: data.allFile.nodes[4].childImageSharp.fluid,
    },
    {
      id: 28,
      name: "Stainless Steel Bathroom Hardware Wheat",
      color: "Wheat",
      price: "Php 1000.00",
      brand: "Y",
      feature: "Q",
      category: "A",
      img: data.allFile.nodes[0].childImageSharp.fluid,
    },
    {
      id: 29,
      name: "Exposed Door Closer Series Orange/Navy",
      color: "Orange/Navy",
      price: "Php 500.00",
      brand: "Z",
      feature: "W",
      category: "B",
      img: data.allFile.nodes[1].childImageSharp.fluid,
    },
    {
      id: 30,
      name: "Intelligent Door Lock N6700 Yellow/Navy",
      color: "Yellow/Navy",
      price: "Php 800.00",
      brand: "X",
      feature: "E",
      category: "C",
      img: data.allFile.nodes[2].childImageSharp.fluid,
    },
    {
      id: 31,
      name: "Stainless Steel Bathroom Hardware White",
      color: "White",
      price: "Php 1000.00",
      brand: "Y",
      feature: "Q",
      category: "A",
      img: data.allFile.nodes[4].childImageSharp.fluid,
    },
    {
      id: 32,
      name: "Exposed Door Closer Series Orange",
      color: "Orange",
      price: "Php 500.00",
      brand: "Y",
      feature: "Q",
      category: "A",
      img: data.allFile.nodes[4].childImageSharp.fluid,
    },
    {
      id: 33,
      name: "Intelligent Door Lock N6700 Yellow",
      color: "Yellow",
      price: "Php 800.00",
      brand: "Z",
      feature: "W",
      category: "B",
      img: data.allFile.nodes[0].childImageSharp.fluid,
    },
    {
      id: 34,
      name: "Stainless Steel Bathroom Hardware Stone",
      color: "Stone",
      price: "Php 1000.00",
      brand: "X",
      feature: "E",
      category: "C",
      img: data.allFile.nodes[1].childImageSharp.fluid,
    },
    {
      id: 36,
      name: "Exposed Door Closer Series Black",
      color: "Black",
      price: "Php 800.00",
      brand: "Y",
      feature: "Q",
      category: "A",
      img: data.allFile.nodes[2].childImageSharp.fluid,
    },
    {
      id: 37,
      name: "Intelligent Door Lock N6700 Navy",
      color: "Navy",
      price: "Php 1000.00",
      brand: "Z",
      feature: "W",
      category: "B",
      img: data.allFile.nodes[4].childImageSharp.fluid,
    },
    {
      id: 38,
      name: "Intelligent Door Lock N6700 Orange",
      color: "Orange",
      price: "Php 800.00",
      brand: "X",
      feature: "E",
      category: "C",
      img: data.allFile.nodes[0].childImageSharp.fluid,
    },
    {
      id: 39,
      name: "Exposed Door Closer Series Series Orange",
      color: "Orange",
      price: "Php 800.00",
      brand: "Y",
      feature: "Q",
      category: "A",
      img: data.allFile.nodes[1].childImageSharp.fluid,
    },
    {
      id: 40,
      name: "Exposed Door Closer Series Series Orange",
      color: "Orange",
      price: "Php 100.00",
      brand: "Z",
      feature: "W",
      category: "B",
      img: data.allFile.nodes[2].childImageSharp.fluid,
    },
    {
      id: 41,
      name: "Stainless Steel Bathroom Hardware Orange",
      color: "Orange",
      price: "Php 1000.00",
      brand: "X",
      feature: "E",
      category: "C",
      img: data.allFile.nodes[4].childImageSharp.fluid,
    },
    {
      id: 42,
      name: "Stainless Steel Bathroom Hardware Orange/Navy",
      color: "Orange/Navy",
      price: "Php 1000.00",
      brand: "Y",
      feature: "Q",
      category: "A",
      img: data.allFile.nodes[0].childImageSharp.fluid,
    },
    {
      id: 43,
      name: "Stainless Steel Bathroom Hardware  Orange/Navy",
      color: "Orange/Navy",
      price: "Php 800.00",
      brand: "Z",
      feature: "W",
      category: "B",
      img: data.allFile.nodes[1].childImageSharp.fluid,
    },
    {
      id: 44,
      name: "Stainless Steel Bathroom Hardware  Orange/Navy",
      color: "Orange/Navy",
      price: "Php 300.00",
      brand: "X",
      feature: "E",
      category: "C",
      img: data.allFile.nodes[2].childImageSharp.fluid,
    },
  ];

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([])
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1000)

  const [products, setProducts] = useState([]); // State for filtered products

  const filterProducts = () => {
    let filteredProducts = allProducts;

    // Filter by selected colors
    if (selectedColors.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedColors.includes(product.color)
      );
    }

    // Filter by selected brands
    if (selectedBrands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

      if (selectedFeatures.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedFeatures.includes(product.feature)
      );
    }
    // Filter by selected category
    if (selectedCategory.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategory.includes(product.category)
      );

      if (selectedPrice.length > 0){
        filteredProducts = filteredProducts.filter(
          selectedPrice => products.price >= minPrice && products.price <= maxPrice)
      }
    }

    setProducts(filteredProducts);
  };

  useEffect(() => {
    filterProducts(); // Call the filter function when the component mounts or when filtering options are selected
  }, [selectedColors, selectedBrands, selectedFeatures, selectedCategory]);

  const handleFilterChange = (event, filterType) => {
    const value = event.target.value;

    // Create a new function to handle changes for different filter types
    if (filterType === "color") {
      if (selectedColors.includes(value)) {
        setSelectedColors(selectedColors.filter((color) => color !== value));
      } else {
        setSelectedColors([...selectedColors, value]);
      }
    } else if (filterType === "brand") {
      if (selectedBrands.includes(value)) {
        setSelectedBrands(selectedBrands.filter((brand) => brand !== value));
      } else {
        setSelectedBrands([...selectedBrands, value]);
      }
    } else if (filterType === "feature") {
      if (selectedFeatures.includes(value)) {
        setSelectedFeatures(
          selectedFeatures.filter((feature) => feature !== value)
        );
      } else {
        setSelectedFeatures([...selectedFeatures, value]);
      }
    } else if (filterType === "category") {
      if (selectedCategory.includes(value)) {
        setSelectedCategory(
          selectedCategory.filter((category) => category !== value)
        );
      } else {
        setSelectedCategory([...selectedCategory, value]);
      }
    }
  };

  // for Accordion
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
    <div>
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
                  role="button"
                  tabIndex={0}
                  className="accordion-header flex justify-between align-center mb-3 cursor-pointer"
                  onClick={toggleBrand}
                  onKeyPress={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      toggleBrand();
                    }
                  }}
                >
                  <h2 className="font-semibold"> Brand </h2>
                  {brandVisible ? (
                    <FaChevronDown className="mt-1 hover:cursor-pointer" />
                  ) : (
                    <FaChevronUp className="mt-1 hover:cursor-pointer" />
                  )}
                </div>
                <div
                  className={`accordion-content p-2 transition duration-300 ${
                    brandVisible ? "" : "hidden"
                  }`}
                >
                  <label className="flex items-center text-left">
                    <input
                      type="checkbox"
                      value="X"
                      onChange={(event) => handleFilterChange(event, "brand")}
                      checked={selectedBrands.includes("X")}
                    />
                    <span className="ml-2 text-gray-600 ">X</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Y"
                      onChange={(event) => handleFilterChange(event, "brand")}
                      checked={selectedBrands.includes("Y")}
                    />
                    <span className="ml-2 text-gray-600 ">Y</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Z"
                      onChange={(event) => handleFilterChange(event, "brand")}
                      checked={selectedBrands.includes("Z")}
                    />
                    <span className="ml-2 text-gray-600 ">Z</span>
                  </label>
                </div>
              </div>
            </div>

            {/** Colour Container */}
            <div className="accordion">
              <div className="accordion-section">
                <div
                  role="button"
                  tabIndex={0}
                  className="accordion-header flex justify-between align-center mb-3 cursor-pointer"
                  onClick={toggleColor}
                  onKeyPress={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      toggleColor();
                    }
                  }}
                >
                  <h2 className="font-semibold"> Color </h2>
                  {colorVisible ? (
                    <FaChevronDown className="mt-1 hover:cursor-pointer" />
                  ) : (
                    <FaChevronUp className="mt-1 hover:cursor-pointer" />
                  )}
                </div>

                <div
                  className={`accordion-content p-2 transition duration-300 ${
                    colorVisible ? "" : "hidden"
                  }`}
                >
                  <label className="flex items-center text-left">
                    <input
                      type="checkbox"
                      value="Black"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("Black")}
                    />
                    <span className="ml-2 text-gray-600 ">Black</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Navy"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("Navy")}
                    />
                    <span className="ml-2 text-gray-600 ">Navy</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Khaki"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("Khaki")}
                    />
                    <span className="ml-2 text-gray-600 ">Khaki</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Wheat"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("Wheat")}
                    />
                    <span className="ml-2 text-gray-600 ">Wheat</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Orange/Navy"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("Orange/Navy")}
                    />
                    <span className="ml-2 text-gray-600 ">Orange/Navy</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Yellow/Navy"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("Yellow/Navy")}
                    />
                    <span className="ml-2 text-gray-600 ">Yellow/Navy</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="White"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("White")}
                    />
                    <span className="ml-2 text-gray-600 ">White</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Orange"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("Orange")}
                    />
                    <span className="ml-2 text-gray-600 ">Orange</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Yellow"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("Yellow")}
                    />
                    <span className="ml-2 text-gray-600 ">Yellow</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Stone"
                      onChange={(event) => handleFilterChange(event, "color")}
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
                  role="button"
                  tabIndex={0}
                  className="accordion-header flex justify-between align-center mb-3 cursor-pointer"
                  onClick={togglePrice}
                  onKeyPress={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      togglePrice();
                    }
                  }}
                >
                  <h2 className="font-semibold"> Price </h2>
                  {priceVisible ? (
                    <FaChevronDown className="mt-1 hover:cursor-pointer" />
                  ) : (
                    <FaChevronUp className="mt-1 hover:cursor-pointer" />
                  )}
                </div>

                <div
                  className={`accordion-content p-2 transition duration-300 ${
                    priceVisible ? "" : "hidden"
                  }`}
                >
                 <label>
                  Min Price:
                  <input type="number" value={minPrice} onChange={e => setMinPrice(parseInt(e.target.value,10))}></input>
                 </label>
                 <label>
                  Max Price:
                  <input type="number" value={maxPrice} onChange={e => setMaxPrice(parseInt(e.target.value,10))}></input>
                 </label>
                </div>
              </div>
            </div>

            {/** Feature */}
            <div className="accordion">
              <div className="accordion-section">
                <div
                  role="button"
                  tabIndex={0}
                  className="accordion-header flex justify-between align-center mb-3 cursor-pointer"
                  onClick={toggleFeature}
                  onKeyPress={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      toggleFeature();
                    }
                  }}
                >
                  <h2 className="font-semibold"> Features </h2>
                  {featureVisible ? (
                    <FaChevronDown className="mt-1 hover:cursor-pointer" />
                  ) : (
                    <FaChevronUp className="mt-1 hover:cursor-pointer" />
                  )}
                </div>

                <div
                  className={`accordion-content p-2 transition duration-300 ${
                    featureVisible ? "" : "hidden"
                  }`}
                >
                  <label className="flex items-center text-left">
                    <input
                      type="checkbox"
                      value="Q"
                      onChange={(event) => handleFilterChange(event, "feature")}
                      checked={selectedFeatures.includes("Q")}
                    />
                    <span className="ml-2 text-gray-600 ">Feature Q</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="W"
                      onChange={(event) => handleFilterChange(event, "feature")}
                      checked={selectedFeatures.includes("W")}
                    />
                    <span className="ml-2 text-gray-600 ">Feature W</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="E"
                      onChange={(event) => handleFilterChange(event, "feature")}
                      checked={selectedFeatures.includes("E")}
                    />
                    <span className="ml-2 text-gray-600 ">Feature E</span>
                  </label>
                </div>
              </div>
            </div>

            {/** Categories */}
            <div className="accordion">
              <div className="accordion-section">
                <div
                  role="button"
                  tabIndex={0}
                  className="accordion-header flex justify-between align-center mb-3 cursor-pointer"
                  onClick={toggleCategories}
                  onKeyPress={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      toggleCategories();
                    }
                  }}
                >
                  <h2 className="font-semibold"> Categories </h2>
                  {categoriesVisible ? (
                    <FaChevronDown className="mt-1 hover:cursor-pointer" />
                  ) : (
                    <FaChevronUp className="mt-1 hover:cursor-pointer" />
                  )}
                </div>

                <div
                  className={`accordion-content p-2 transition duration-300 ${
                    categoriesVisible ? "" : "hidden"
                  }`}
                >
                  <label className="flex items-center text-left">
                    <input
                      type="checkbox"
                      value="A"
                      onChange={(event) =>
                        handleFilterChange(event, "category")
                      }
                      checked={selectedCategory.includes("A")}
                    />
                    <span className="ml-2 text-gray-600 ">Category A</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="B"
                      onChange={(event) =>
                        handleFilterChange(event, "category")
                      }
                      checked={selectedCategory.includes("B")}
                    />
                    <span className="ml-2 text-gray-600 ">Category B</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="C"
                      onChange={(event) =>
                        handleFilterChange(event, "category")
                      }
                      checked={selectedCategory.includes("C")}
                    />
                    <span className="ml-2 text-gray-600 ">Category C</span>
                  </label>
                </div>
              </div>
            </div>
            {/* Add more checkbox options for colors as needed */}
          </div>
        </div>

        {/* Products */}
        <div className="col-span-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.slice(0,9).map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded hover:cursor-pointer border hover:shadow-lg"
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
                <Link to="../about">
                <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
                  Add to cart <BsCart2 className="mx-2" />
                  {/* Cart Icon */}
                </button></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
