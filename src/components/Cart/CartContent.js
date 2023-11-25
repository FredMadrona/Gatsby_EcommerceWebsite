import React,{useState} from "react";
import { StaticImage } from "gatsby-plugin-image";
import { BsTrash3 } from "react-icons/bs";
import { Link } from "gatsby";

const CartContent = () => {

  
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
    <div>
      <div className="grid grid-cols-12 bg-gray-100">
        <div className="cols-span-1"></div>
        <div className="col-span-10 flex flex-col lg:flex-row lg:p-5 gap-5 border border-primary">
          <div className=" lg:w-[90%] w-full">
            <table className="w-full bg-white rounded">
              <thead>
                <tr className="py-[100px] border-b border-black">
                  <th className="w-1/6" ></th>
                  <th className="py-2 px-4 w-1/3 text-gray-500 font-semibold" >
                    Item
                  </th>
                  <th className="py-2 px-4 w-1/3 text-gray-500 font-semibold">
                    Quantity
                  </th>
                  <th className="py-2 px-4 w-1/6 text-gray-500 font-semibold">
                    Total
                  </th>
                  <th className="w-1/6"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="py-[100px] border border-b">
                  <td>
                    <StaticImage
                      src="../ProductImages/Hardware04.jpg"
                      className="h-[100px] w-[100px] m-5 p-5 border cursor-pointer"
                    ></StaticImage>
                  </td>
                  <td className="py-2 px-4 w-1/3">
                    <p className="text-sm text-start w-[250px] text-gray-500">
                      Stainelss Steel Bathroom Hardware WWG17220
                    </p>
                  </td>
                  <td className="py-3 px-5  mt-[40px] mx-5 flex flex-row justify-evenly   border border-gray-100">
                    <button className="text-gray-500 px-2 text-md text-center" onClick={decreaseQuantity}>
                      -
                    </button>
                    <span className="mx-2 px-2 text-center"> {quantity} </span>
                    <button className=" text-gray-500 px-2 text-md text-center" onClick={increaseQuantity}>
                      +
                    </button>
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
                    <StaticImage
                      src="../ProductImages/Hardware04.jpg"
                      className="h-[100px] w-[100px] m-5 p-5 border cursor-pointer"
                    ></StaticImage>
                  </td>
                  <td className="py-2 px-4 w-1/3">
                    <p className="text-sm text-start w-[250px] text-gray-500">
                      Stainelss Steel Bathroom Hardware WWG17220
                    </p>
                  </td>
                  <td className="py-3 px-5  mt-[40px] mx-5 flex flex-row justify-evenly   border border-gray-100">
                    <button className="text-gray-500 px-2 text-md text-center">
                      -
                    </button>
                    <span className="mx-2 px-2 text-center"> 1 </span>
                    <button className=" text-gray-500 px-2 text-md text-center">
                      +
                    </button>
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
                    <StaticImage
                      src="../ProductImages/Hardware04.jpg"
                      className="h-[100px] w-[100px] m-5 p-5 border cursor-pointer"
                    ></StaticImage>
                  </td>
                  <td className="py-2 px-4 w-1/3">
                    <p className="text-sm text-start w-[250px] text-gray-500">
                      Stainelss Steel Bathroom Hardware WWG17220
                    </p>
                  </td>
                  <td className="py-3 px-5  mt-[40px] mx-5 flex flex-row justify-evenly   border border-gray-100">
                    <button className="text-gray-500 px-2 text-md text-center">
                      -
                    </button>
                    <span className="mx-2 px-2 text-center"> 1 </span>
                    <button className=" text-gray-500 px-2 text-md text-center">
                      +
                    </button>
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
          <div className=" h-auto w-[30%] mx-5">
            <div className="bg-white rounded py-3">
              <h3 className="font-bold text-xl mt-1 m-5"> Total </h3>
              <div className="flex justify-between align-center w-[250px] border-b pb-2">
                <span className="text-gray-400 mx-5 mt-1 text-md hover:text-gray-600 cursor-pointer ">
                  {" "}
                  Subtotal{" "}
                </span>
                <span className="text-black text-md mx-5 mt-1 font-bold cursor-pointer"> 0.00 </span>
              </div>
              <div className="flex justify-between align-center w-[250px] border-b pb-2">
                <span className="text-gray-400 mx-5 mt-1 text-md hover:text-gray-600 cursor-pointer "> VAT </span>
                <span className="text-black text-md mx-5 mt-1 font-bold cursor-pointer"> 0 </span>
              </div>
              <div className="flex justify-between align-center w-[250px] border-b pb-2">
                <span className="text-gray-400 mx-5 mt-1 text-md hover:text-gray-600 cursor-pointer ">
                  {" "}
                  Grand Total{" "}
                </span>
                <span className="text-black text-md mx-5 mt-1 font-bold cursor-pointer"> 0.00 </span>
              </div>
              <div className=" w-full flex justify-center mt-5">
                <button className="bg-yellow-300 hover:bg-yellow-400 h-1/4 hover:shadow-md rounded  mt-1 flex items-center justify-center border w-full">
                  <StaticImage
                    className="h-1/4  w-1/4 m-3"
                    src="./paypalpng.png"
                  />
                </button>
              </div>
              <div className="w-full my-1">
                <p className="text-gray-300 text-center"> or </p>
              </div>
              <div className="w-full flex justify-center mt-1">
               <Link to="../Checkout" className="w-full"> <button className="w-full bg-red-600 py-3 rounded  border text-white text-sm hover:shadow-md hover:bg-red-700">
                  <p className="font-semibold hover:underline ">
                    PROCEED TO CHECKOUT
                  </p>
                </button></Link>
              </div>
            </div>
            <div className="w-full flex flex-row justify-center gap-1 mt-5">
              <StaticImage src="./Paypal-logo.png" className="w-[50px] h-[30px] cursor-pointer object-cover" />
              <StaticImage src="./Visa-logo.png" className="w-[50px] h-[30px] cursor-pointer object-cover" />
              <StaticImage src="./Mastercard-logo.png" className="w-[50px] h-[30px] cursor-pointer object-cover" />
              <StaticImage src="./AmericanExpressPng.png" className="w-[50px] h-[30px] cursor-pointer object-cover" />
            </div>
          </div>
        </div>
        <div className="cols-span-1"></div>
      </div>
    </div>
  );
};

export default CartContent;
