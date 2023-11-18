import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

const CheckoutContent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    address1: "",
    address2: "",
    country: "",
    barangay: "",
    postalCode: "",
    stateProvince: "",
    company: "",
    checkbox1: false,
    checkbox2: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <div className="grid grid-cols-12 bg-gray-100">
        <div className="col-span-1"> </div>
        <div className="col-span-10 flex flex-row gap-5 p-5">
          <div className="w-[70%] h-[72%] bg-white rounded p-5">
            <h1 className="text-xl ml-3 pb-5 hover:font-semibold hover:underline cursor-pointer">
              {" "}
              Billing Address
            </h1>
            <form onSubmit={handleSubmit} className="p-3 flex flex-col">
              <div className="flex flex-row gap-3 ">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="FirstName"
                  className="w-full py-2 px-3 text-base mt-2 border border-gray-400"
                />
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="LastName"
                  className="w-full py-2 px-3 text-base mt-2 border border-gray-400"
                />
              </div>
              <input
                type="email"
                name="lastname"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full py-2 px-3 text-base mt-4 border border-gray-400"
              />
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Telephone"
                className="w-full py-2 px-3 text-base mt-4 border border-gray-400"
              />
              <input
                type="text"
                name="address"
                value={formData.address1}
                onChange={handleChange}
                placeholder="Address"
                className="w-full py-2 px-3 text-base mt-4 border border-gray-400"
              />
              <input
                type="text"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                placeholder="Address 2"
                className="w-full py-2 px-3 text-base mt-4 border border-gray-400"
              />

              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full py-2 px-3 text-base mt-2 border placeholder-gray-500 border-gray-400"
              >
                <option className="text-gray-500" value="" disabled>
                  Select a Country
                </option>
                <option value="usa">Philippines</option>
                <option value="canada">Japan</option>
                <option value="uk">Taiwan </option>
              </select>

              <div className="flex flex-row gap-3">
                <input
                  type="text"
                  name="barangay"
                  value={formData.barangay}
                  onChange={handleChange}
                  placeholder="Barangay"
                  className="w-full py-2 px-3 text-base mt-4 border border-gray-400"
                />

                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Postal Code"
                  className="w-full py-2 px-3 text-base mt-4 border border-gray-400"
                />
              </div>

              <select
                name="country"
                value={formData.stateProvince}
                onChange={handleChange}
                className="w-full py-2 px-3 text-base mt-2 border placeholder-gray-500 border-gray-400"
              >
                <option className="text-gray-500" value="" disabled>
                  State/Province
                </option>
                <option value="Albay">Albay</option>
                <option value="Aklan">Aklan</option>
              </select>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full py-2 px-3 text-base mt-4 border border-gray-400"
              />
              <label className=" text-md text-gray-400 mt-5">
                <input
                  type="checkbox"
                  name="checkbox1"
                  checked={formData.checkbox1}
                  onChange={handleChange}
                  className="mr-2"
                />
                Create an account for later use
              </label>
              <label className=" text-md text-gray-400 mt-1">
                <input
                  type="checkbox"
                  name="checkbox2"
                  checked={formData.checkbox2}
                  onChange={handleChange}
                  className="mr-2"
                />
                Ship to the same address
              </label>
            </form>
          </div>
          <div className="w-[50%] bg-white rounded py-5">
            {" "}
            <div className="flex flex-row justify-between mx-[5%] text-gray-500 px-5 text-sm ">
              {" "}
              <p className="cursor-pointer hover:font-semibold">Item</p> <p className="cursor-pointer hover:font-semibold">Subtotal</p>{" "}
            </div>
            <div>
              {" "}
              <table className="w-full mt-5 border-t border-gray-600">
                <tr className="flex justify-between mx-[5%] mx-5 my-3">
                  <td>
                    {" "}
                    <p className="text-sm text-gray-500    ">
                      {" "}
                      Stainless Steel Bathroom Hard...{" "}
                    </p>
                  </td>
                  <td>
                    {" "}
                    <p className="text-sm text-gray-500  "> x1 </p>
                  </td>
                  <td>
                    {" "}
                    <p className="text-sm text-gray-500    "> 0.00 </p>
                  </td>
                </tr>
                <tr className="flex justify-between mx-[5%] my-3">
                  <td>
                    {" "}
                    <p className="text-sm text-gray-500    ">
                      {" "}
                      Stainless Steel Bathroom Hard...{" "}
                    </p>
                  </td>
                  <td>
                    {" "}
                    <p className="text-sm text-gray-500  "> x1 </p>
                  </td>
                  <td>
                    {" "}
                    <p className="text-sm text-gray-500    "> 0.00 </p>
                  </td>
                </tr>
                <tr className="flex justify-between mx-[5%] mx-5 my-3">
                  <td>
                    {" "}
                    <p className="text-sm text-gray-500    ">
                      {" "}
                      Stainless Steel Bathroom Hard...{" "}
                    </p>
                  </td>
                  <td>
                    {" "}
                    <p className="text-sm text-gray-500  "> x1 </p>
                  </td>
                  <td>
                    {" "}
                    <p className="text-sm text-gray-500    "> 0.00 </p>
                  </td>
                </tr>
              </table>{" "}
              <div className="flex flex-row justify-between text-sm text-gray-500 border-t border-gray-600 px-[5%] py-2 ">
                <p> Subtotal </p> <p> 0.00 </p>
              </div>
              <div className="flex flex-row justify-between text-sm text-gray-500 border-t border-gray-600 px-[5%] py-2 ">
                <p> VAT </p> <p> 0% </p>
              </div>
              <div className="flex flex-row justify-between text-sm text-gray-500 border-t border-b  border-gray-600 px-[5%] py-2 ">
                <p> Total </p> <p className="font-bold text-black"> 0.00 </p>
              </div>
              <div className=" w-full flex justify-center gap-5 py-5">
                <input
                  type="text"
                  className="border w-[50%] border border-gray-800 bg-gray-200 px-3 text-sm "
                  placeholder="Gift card or discount code "
                ></input>{" "}
                <button className="p-2 w-[30%] border bg-black text-white font-semibold text-sm">
                  {" "}
                  Apply Coupon{" "}
                </button>
              </div>
              <div className="pt-2 flex flex-row gap-[100px] mx-[10%]">
                <div className="flex align-start flex-col">
                  <p className="text-gray-400  text-sm">Regular Post - FREE</p>
                  <div>
                    <input
                      type="radio"
                      id="regularPost"
                      name="shipping"
                      value="regular"
                      className="mr-2 cursor-pointer"
                    />
                    <label htmlFor="regularPost" className="font-semibold">
                      P0.00
                    </label>
                  </div>
                </div>
                <div className="flex align-start flex-col">
                  <p className="text-gray-400  text-sm">Express Post</p>
                  <div>
                    <input
                      type="radio"
                      id="regularPost"
                      name="shipping"
                      value="regular"
                      className="mr-2 cursor-pointer"
                    />
                    <label htmlFor="regularPost" className="font-semibold">
                      P0.00
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 mx-[25%] justify-center align-center mt-5">
                <button className="w-full bg-yellow-400  hover:bg-yellow-500 py-1 px-5 align-center border rounded">
                  <StaticImage
                    src="../Cart/paypalpng.png"
                    className="  mt-1 h-1/6 w-[30%]"
                  ></StaticImage>
                </button>
                <button className="bg-black text-white font-semibold py-2 text-sm hover:underline rounded">
                  Credit Card Payment{" "}
                </button>
              </div>
              <div className="border border-gray-400 m-5 p-5 text-sm">
                <select
                  name="CreditCard"
                  value="CreditCard"
                  className="w-full py-2 px-3  mt-2 border placeholder-gray-500 border"
                >
                  <option className="text-gray-500" value="" disabled>
                    Please Select
                  </option>
                  <option value="BPI">BPI</option>
                  <option value="BDO">BDO</option>
                  <option value="ChinaBank">ChinaBank</option>
                </select>
                <input type="text" placeholder="Name on card" className="border my-3 w-full p-1 px-2 " ></input>
                <input type="text" placeholder="Credit Card Number" className="border mb-1 w-full p-1 px-2 " ></input>
                <p className="text-gray-400 text-sm mt-5 cursor-pointer hover:text-gray-500"> Expiration Date </p>
                <div className="flex flex-row gap-3"> 
                <select
                  name="Month"
                  value="Month"
                  className="w-full py-2 px-3  mt-2 border placeholder-gray-500 border"
                >
                  <option className="text-gray-500" value="" disabled>
                   Month
                  </option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                </select>
                <select
                  name="Year"
                  value="Year"
                  className="w-full py-2 px-3  mt-2 border placeholder-gray-500 border"
                >
                  <option className="text-gray-500" value="" disabled>
                   Year
                  </option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
                </div>
                <input type="text" placeholder="Card Verification Number*" className="border my-3 w-full p-1 px-2 "></input>
              </div>
            </div>
            <button className="bg-red-600 px-5 py-2 w-[50%] text-sm text-white mx-[25%] font-bold hover:bg-red-700"> Place Order  </button>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default CheckoutContent;
