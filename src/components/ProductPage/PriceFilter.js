// ProductFilter.js
import React, { useState, useEffect } from "react";

const PriceFilter = ({ products, setPriceFilteredProducts }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    filterProductsByPrice(minPrice, maxPrice);
  }, [minPrice, maxPrice, products]);

  const filterProductsByPrice = (min, max) => {
    const filtered = products.filter((product) => {
      const price = parseFloat(product.price);
      return (!min || price >= parseFloat(min)) && (!max || price <= parseFloat(max));
    });

    setPriceFilteredProducts(filtered);
  };

  return (
    <div>
      <div>
        <label>Min Price:</label>
        <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      </div>
      <div>
        <label>Max Price:</label>
        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </div>
    </div>
  );
};

export default PriceFilter;
