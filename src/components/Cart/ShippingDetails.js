import React from "react";

const ShippingDetails = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-12 bg-gray-100">
        <div className="col-span-1 "> </div>
        <div className="col-span-10 w-full  rounded p-5">
          <div className="bg-white rounded w-[75%]">
            <div className="border-b border-gray-300 p-5">
              <h1 className="text-xl  cursor-pointer hover:font-semibold pb-5">
                {" "}
                Discount Codes{" "}
              </h1>
              <p className="text-gray-400 text-sm pb-3">
                {" "}
                ENTER YOUR COUPON CODE IF YOU HAVE ONE.{" "}
              </p>
              <input
                type="text"
                className="text border border-gray-500 bg-gray-100 p-2 w-[40%] mr-5"
              ></input>
              <button className="w-[20%] bg-black text-white font-semibold hover:shadow-sm p-2 ">
                {" "}
                Apply Coupon
              </button>
            </div>
            <div className="p-5">
              <h1 className="text-xl  cursor-pointer hover:font-semibold pb-5">
                {" "}
                Shipping Method
              </h1>
              <div className="flex md:flex-row  flex-column">
                <div className="my-3   w-full">
                  <p className="text-black text-sm font-semibold"> Country* </p>
                  <input
                    type="text"
                    placeholder="Philippines"
                    className="border w-[90%] px-3 py-1 mt-1"
                  ></input>
                </div>
                <div className="my-3  w-full">
                  <p className="text-black text-sm font-semibold">
                    {" "}
                    State/Province*{" "}
                  </p>
                  <input
                    type="text"
                    placeholder="Please select region, state or province"
                    className="border w-[90%] px-3 py-1 mt-1"
                  ></input>
                </div>
              </div>
              <div className="my-3  w-full">
                <p className="text-black text-sm font-semibold"> Post Code </p>
                <input
                  type="text"
                  placeholder=""
                  className="border w-[45%] px-3 py-1 mt-1"
                ></input>
              </div>
              <button className="w-[30%]  bg-black text-white font-semibold hover:shadow-sm p-2 my-5">
                Update Shipping Options
              </button>
              <div className="pt-5 flex flex-row gap-[100px]">
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
              <button className="w-[30%]  bg-black text-white font-semibold hover:shadow-sm p-2 my-5">
               Select Shipping
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 "> </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
