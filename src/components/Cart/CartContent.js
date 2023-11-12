
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { BsTrash3 } from "react-icons/bs";

const CartContent = () => {
  return (
    <div>
      <div className="grid grid-cols-12 bg-gray-100">
        <div className="lg:cols-span-2 cols-span-1"></div>
        <div className="lg:cols-span-8 cols-span-10 flex lg:flex-cols flex-row">
          <div className="border p-[25px]">
            <table className="w-full bg-white rounded">
              <thead>
                <tr className="py-[100px] border-b border-black">
                  <th className="w-1/6"></th>
                  <th className="py-2 px-4 w-1/3 text-gray-500 font-semibold">Item</th>
                  <th className="py-2 px-4 w-1/6 text-gray-500 font-semibold">Quantity</th>
                  <th className="py-2 px-4 w-1/6 text-gray-500 font-semibold">Total</th>
                  <th className="w-1/6"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="py-[100px] border border-b">
                  <td>
                  <StaticImage src="../ProductImages/Hardware04.jpg" className="h-[100px] w-[100px] m-5 p-5 border cursor-pointer"></StaticImage>
                  </td>
                  <td className="py-2 px-4 w-1/3">
                    <p className="text-sm text-start w-[250px] text-gray-500">
                      Stainelss Steel Bathroom Hardware WWG17220
                    </p>
                  </td>
                  <td className="py-3 px-5  mt-[40px] mx-5 flex flex-row justify-evenly   border border-gray-100">
                    <button className="text-gray-500 px-2 text-md text-center">-</button>
                    <span className="mx-2 px-2 text-center"> 1 </span>
                    <button className=" text-gray-500 px-2 text-md text-center">+</button>
                  </td>
                  <td className="w-1/6">
                    <p className="text-md font-semibold text-center">P 0.00</p>
                  </td>
                  <td className="w-1/6 m-5">
                    <BsTrash3 className="text-gray-400 cursor-pointer m-5" />
                  </td>
                </tr>
                <tr className="py-[100px] border border-b">
                  <td>
                  <StaticImage src="../ProductImages/Hardware04.jpg" className="h-[100px] w-[100px] m-5 p-5 border cursor-pointer"></StaticImage>
                  </td>
                  <td className="py-2 px-4 w-1/3">
                    <p className="text-sm text-start w-[250px] text-gray-500">
                      Stainelss Steel Bathroom Hardware WWG17220
                    </p>
                  </td>
                  <td className="py-3 px-5  mt-[40px] mx-5 flex flex-row justify-evenly   border border-gray-100">
                    <button className="text-gray-500 px-2 text-md text-center">-</button>
                    <span className="mx-2 px-2 text-center"> 1 </span>
                    <button className=" text-gray-500 px-2 text-md text-center">+</button>
                  </td>
                  <td className="w-1/6">
                    <p className="text-md font-semibold text-center">P 0.00</p>
                  </td>
                  <td className="w-1/6 m-5">
                    <BsTrash3 className="text-gray-400 cursor-pointer m-5" />
                  </td>
                </tr>
                <tr className="py-[100px] border border-b">
                  <td>
                  <StaticImage src="../ProductImages/Hardware04.jpg" className="h-[100px] w-[100px] m-5 p-5 border cursor-pointer"></StaticImage>
                  </td>
                  <td className="py-2 px-4 w-1/3">
                    <p className="text-sm text-start w-[250px] text-gray-500">
                      Stainelss Steel Bathroom Hardware WWG17220
                    </p>
                  </td>
                  <td className="py-3 px-5  mt-[40px] mx-5 flex flex-row justify-evenly   border border-gray-100">
                    <button className="text-gray-500 px-2 text-md text-center">-</button>
                    <span className="mx-2 px-2 text-center"> 1 </span>
                    <button className=" text-gray-500 px-2 text-md text-center">+</button>
                  </td>
                  <td className="w-1/6">
                    <p className="text-md font-semibold text-center">P 0.00</p>
                  </td>
                  <td className="w-1/6 m-5">
                    <BsTrash3 className="text-gray-400 cursor-pointer m-5" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white rounded py-[25px] m-[25px]">
            <h3 className="font-bold text-xl mt-1 m-5"> Total </h3>
              <div className="flex justify-between align-center w-[250px]">
                <span className="text-gray-400 mx-5 mt-1 text-md"> Subtotal </span>
                <span className="text-black text-md mx-5 mt-1"> 0.00 </span>
              </div>
              <div className="flex justify-between align-center w-[250px]">
                <span className="text-gray-400 mx-5 mt-1 text-md"> VAT </span>
                <span className="text-black text-md mx-5 mt-1"> 0 </span>
              </div>
              <div className="flex justify-between align-center w-[250px]">
                <span className="text-gray-400 mx-5 mt-1 text-md"> Grand Total </span>
                <span className="text-black text-md mx-5 mt-1"> 0.00 </span>
              </div>

          </div>
        </div>
        <div className="lg:cols-span-2 cols-span-1"></div>
      </div>
    </div>
  );
};

export default CartContent;
