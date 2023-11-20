import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { BsHeart, BsCart2 } from "react-icons/bs";
import { Link } from "gatsby";

const ProductCards = () => {
  return (
    <div>
      <div className="bg-white grid md:grid-cols-2 grid-cols-1">
        <div className="col-span-1 m-5">
          <StaticImage
            src="./IndexPageImages/DoorControl.png"
            className="rounded cursor-pointer hover:shadow-md "
          ></StaticImage>
        </div>
        <div className="col-span-1 m-5">
          <StaticImage
            src="./IndexPageImages/IntelligentDoorLock.png"
            className="rounded cursor-pointer hover:shadow-md "
          ></StaticImage>
        </div>
      </div>

      <div className="grid grid-cols-12 bg-gray-100 pt-5 ">
        <div className="col-span-2"></div>
        <div className="col-span-8">
          {" "}
          <h1 className="text-3xl ml-5 text-primary align-center font-bold ">
            {" "}
            <Link to="ProductsPage" className="hover:underline">Popular Products</Link>
          </h1>{" "}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 bg-gray-100 p-5">
        <div className="col-span-2"></div>
        <div className="col-span-8 grid md:grid-cols-4 grid-cols-2 justify-evenly gap-5">
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:border-primary">
            <StaticImage src="../ProductImages/Hardware03.jpg"></StaticImage>
            <p className="text-sm text-gray-500 mb-3 h-10">
              {" "}
              Stainless Steel Bathroom Hardware{" "}
            </p>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
              </p>
            </div>
            <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
              Add to cart <BsCart2 className="mx-2" />
              {/* Cart Icon */}
            </button>
          </div>
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:border-primary">
            <StaticImage src="../ProductImages/Hardware02.jpg"></StaticImage>
            <p className="text-sm text-gray-500 mb-3 h-10">
              {" "}
              Stainless Steel Bathroom Hardware{" "}
            </p>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
              </p>
            </div>
            <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
              Add to cart <BsCart2 className="mx-2" />
              {/* Cart Icon */}
            </button>
          </div>
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:border-primary">
            <StaticImage src="../ProductImages/Hardware04.jpg"></StaticImage>
            <p className="text-sm text-gray-500 mb-3 h-10">
              {" "}
              Exposed Door Closer Series{" "}
            </p>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
              </p>
            </div>
            <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
              Add to cart <BsCart2 className="mx-2" />
              {/* Cart Icon */}
            </button>
          </div>
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:border-primary">
            <StaticImage src="../ProductImages/Hardware02.jpg"></StaticImage>
            <p className="text-sm text-gray-500 mb-3 h-10">
              {" "}
              Intelligent Door Lock N6700{" "}
            </p>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
              </p>
            </div>
            <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
              Add to cart <BsCart2 className="mx-2" />
              {/* Cart Icon */}
            </button>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
      <div className="grid grid-cols-12 bg-gray-100 pt-5">
        <div className="col-span-2"></div>
        <div className="col-span-8">
          {" "}
          <h1 className="text-3xl ml-5 text-primary align-center font-bold hover:underline cursor-pointer">
            {" "}
            New Arrival{" "}
          </h1>{" "}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 bg-gray-100 p-5">
        <div className="col-span-2"></div>
        <div className="col-span-8 grid md:grid-cols-4 grid-cols-2 justify-evenly gap-5">
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:border-primary">
            <StaticImage src="../ProductImages/Hardware03.jpg"></StaticImage>
            <p className="text-sm text-gray-500 mb-3 h-10">
              {" "}
              Stainless Steel Bathroom Hardware{" "}
            </p>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
              </p>
            </div>
            <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
              Add to cart <BsCart2 className="mx-2" />
              {/* Cart Icon */}
            </button>
          </div>
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:border-primary">
            <StaticImage src="../ProductImages/Hardware02.jpg"></StaticImage>
            <p className="text-sm text-gray-500 mb-3 h-10">
              {" "}
              Stainless Steel Bathroom Hardware{" "}
            </p>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
              </p>
            </div>
            <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
              Add to cart <BsCart2 className="mx-2" />
              {/* Cart Icon */}
            </button>
          </div>
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:border-primary">
            <StaticImage src="../ProductImages/Hardware04.jpg"></StaticImage>
            <p className="text-sm text-gray-500 mb-3 h-10">
              {" "}
              Exposed Door Closer Series{" "}
            </p>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
              </p>
            </div>
            <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
              Add to cart <BsCart2 className="mx-2" />
              {/* Cart Icon */}
            </button>
          </div>
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:border-primary">
            <StaticImage src="../ProductImages/Hardware02.jpg"></StaticImage>
            <p className="text-sm text-gray-500 mb-3 h-10">
              {" "}
              Intelligent Door Lock N6700{" "}
            </p>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
              </p>
            </div>
            <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
              Add to cart <BsCart2 className="mx-2" />
              {/* Cart Icon */}
            </button>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>

      <div className="grid grid-cols-12 bg-white p-5 ">
        <div className="col-span-2"></div>
        <div className="col-span-8 grid md:grid-cols-3 grid-cols-1 gap-5">
          <div className="col-span-1">
            <StaticImage
              src="./IndexPageImages/IndexPageImage01.png"
              className="w-full h-full cursor-pointer hover:shadow-md rounded"
            />
          </div>

          <div className="col-span-1">
            <StaticImage
              src="./IndexPageImages/IndexPageImage02.png"
              className="w-full h-full cursor-pointer hover:shadow-md rounded"
            />
          </div>

          <div className="col-span-1 bg-red text-white">
            <StaticImage
              src="./IndexPageImages/IndexPageImage03.png"
              className="w-full h-full cursor-pointer hover:shadow-md rounded"
            />
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default ProductCards;
