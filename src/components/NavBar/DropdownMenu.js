import React, { useState } from "react";

const productOptions = [
  'Category',
  'Door & Window',
  'Flooring',
  'Tile Products',
  'Smart Devices',
  'Outdoor Lighting',
  'Safety Production Products',
  'Pipeline',
  'LED Screen',
  'More'
];

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState(productOptions[0]); // Default selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown-menu md:hidden  relative flex flex-col text-white bg-primary text-center lg:md w-full justify-center items-center">
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
        className="bg-primary appearance-none border border-white  w-full py-2 px-3 text-center hover:cursor-pointer text-white"
      >
        {productOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
