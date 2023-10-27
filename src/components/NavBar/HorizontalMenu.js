import React from 'react';

const HorizontalMenu = () => {
  const menuItems = [
    'Door & Window',
    'Flooring',
    'Tile Products',
    'Smart Devices',
    'Outdoor Lighting',
    'Safety Production Products',
    'Pipeline',
    'LED Screen',
    'More',
  ];

  return (
    <nav className=" w-full py-1 px-1 bg-primary grid grid-cols-12">
      <div className='col-span-1'> </div>
      <div className="col-span-10 grid grid-cols-9 justify-evenly">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="col-span-1 text-xs text-white text-center py-2 rounded-lg hover:font-bold cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
      <div className='col-span-1'> </div>
    </nav>
  );
};

export default HorizontalMenu;
