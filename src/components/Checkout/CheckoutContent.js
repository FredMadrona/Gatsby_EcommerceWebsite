import React, { useState } from "react";

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
          <div className="w-[50%] bg-white rounded p-5">
            <h1 className="text-xl ml-3 pb-5"> Billing Address</h1>
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
                <option value="usa">Albay</option>
                <option value="canada">Aklan</option>
                       
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
          <div className="w-[40%]"></div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default CheckoutContent;
