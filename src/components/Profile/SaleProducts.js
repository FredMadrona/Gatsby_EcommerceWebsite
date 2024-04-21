import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { BsThreeDots, BsChatLeftDots } from "react-icons/bs";
import { TiTag } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";

const SaleProducts = () => {
  return (
    <div className="lg:mx-[5%] my-5 ">
      <div className="card bg-white border p-5">
        <div className="border-b card-body border-gray-50 ">
          <div className="flex">
            <div className="grow">
              <h5 className="text-primary font-semibold text-15 cursor-pointer ">Top Selling </h5>
            </div>
            <div className="">
              <Link className="font-medium text-violet-500">View All</Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-4">
                <div className="p-1 card dark:border-zinc-600">
                  <div className="p-4">
                    <div className="flex items-start">
                      <div className="flex-grow">
                        <h5 className="text-15 text-truncate">
                          <Link to="#" className="text-black">
                            Beautiful Day with Friends
                          </Link>
                        </h5>
                        <p className="mt-2 mb-0 text-black">10 Apr, 2020</p>
                      </div>
                      <div className=" ms-2">
                        <div className="relative ml-3 dropdown">
                          <button className="p-0 text-gray-400 border-0 btn dropdown-toggle">
                            <BsThreeDots className="text-lg bx "></BsThreeDots>
                          </button>
                          <ul className="absolute top-auto z-50 w-40 py-1.5 text-left list-none bg-white border border-gray-50/50 rounded shadow-lg dropdown-menu ltr:!right-0 ltr:!left-auto rtl:!left-0 rtl:!right-auto dark:bg-zinc-700 dark:border-zinc-600 bg-clip-padding hidden">
                            <li>
                              <Link className="block w-full px-5 py-1.5 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80">
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link className="block w-full px-5 py-1.5 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80">
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link className="block w-full px-5 py-1.5 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80">
                                Something else here
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <StaticImage
                      src="./Profileimages/img-3.jpg"
                      className="p-1 border rounded border-gray-50 dark:border-zinc-600"
                    ></StaticImage>
                  </div>
                  <div className="p-4 ">
                    <ul className="inline-flex mb-4 ">
                      <li className="ltr:mr-3 rtl:ml-3 inline-flex align-center  ">
                      <TiTag className="text-black text-sm mt-1 mr-2" />
                        <Link className="text-black">
                          Project
                        </Link>
                      </li>
                      <li className="ltr:mr-3 rtl:ml-3  inline-flex align-center  ml-5">
                      <BsChatLeftDots className="text-black  text-sm mt-1.5 mr-2" />
                        <Link className="text-black">
                          12 Comments
                        </Link>
                      </li>
                    </ul>
                    <p className="mb-4 text-black">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet
                    </p>
                    <div>
                      <div className="inline-flex align-center ">
                      <Link className="text-primary font-semibold hover:mr-3 mr-2 cursor-pointer transition-all duration-300 ease-in-out" >
                        Read more 
                      </Link>
                      <FaArrowRight className="text-primary mt-1.5 text-sm "/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <div className="p-1 card dark:border-zinc-600">
                  <div className="p-4">
                    <div className="flex items-start">
                      <div className="flex-grow">
                        <h5 className="text-15 text-truncate">
                          <Link className="text-black">
                            Drawing a sketch
                          </Link>
                        </h5>
                        <p className="mt-2 mb-0 text-black">
                          24 Mar, 2020
                        </p>
                      </div>
                      <div className=" ms-2">
                        <div className="relative ml-3 dropdown">
                          <button
                            className="p-0 text-gray-400 border-0 btn dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            id="dropdownMenuButton1"
                          >
                            <BsThreeDots className="text-lg bx "></BsThreeDots>{" "}
                          </button>
                          <ul className="absolute top-auto z-50 w-40 py-1.5 text-left list-none bg-white border border-gray-50/50 rounded shadow-lg dropdown-menu ltr:!right-0 ltr:!left-auto rtl:!left-0 rtl:!right-auto dark:bg-zinc-700 dark:border-zinc-600 bg-clip-padding hidden">
                            <li>
                              <Link className="block w-full px-5 py-1.5 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80">
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link className="block w-full px-5 py-1.5 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80">
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link className="block w-full px-5 py-1.5 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80">
                                Something else here
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <StaticImage
                      src="./Profileimages/img-1.jpg"
                      alt=""
                      className="p-1 border rounded border-gray-50 dark:border-zinc-600"
                    ></StaticImage>
                  </div>
                  <div className="p-4 ">
                    <ul className="inline-flex mb-4 ">
                      <li className="ltr:mr-3 rtl:ml-3 inline-flex align-center  ">
                      <TiTag className="text-black text-sm mt-1 mr-2" />
                        <Link className="text-black">
                          Development
                        </Link>
                      </li>
                      <li className="ltr:mr-3 rtl:ml-3  inline-flex align-center  ml-5">
                      <BsChatLeftDots className="text-black  text-sm mt-1.5 mr-2" />
                        <Link className="text-black">
                          12 Comments
                        </Link>
                      </li>
                    </ul>
                    <p className="mb-4 text-black">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet
                    </p>
                    <div>
                    <div className="inline-flex align-center ">
                      <Link className="text-primary font-semibold hover:mr-3 mr-2 cursor-pointer transition-all duration-300 ease-in-out" >
                        Read more 
                      </Link>
                      <FaArrowRight className="text-primary mt-1.5 text-sm "/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <div className="p-1 card dark:border-zinc-600">
                  <div className="p-4">
                    <div className="flex items-start">
                      <div className="flex-grow">
                        <h5 className="text-15 text-truncate">
                          <Link className="text-black">
                            Project discussion with team
                          </Link>
                        </h5>
                        <p className="mt-2 mb-0 text-black">
                          20 Mar, 2020
                        </p>
                      </div>
                      <div className=" ms-2">
                        <div className="relative ml-3 dropdown">
                          <button
                            className="p-0 text-gray-400 border-0 btn dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            id="dropdownMenuButton1"
                          >
                            <BsThreeDots className="text-lg bx "></BsThreeDots>{" "}
                          </button>
                          <ul className="absolute top-auto z-50 w-40 py-1.5 text-left list-none bg-white border border-gray-50/50 rounded shadow-lg dropdown-menu ltr:!right-0 ltr:!left-auto rtl:!left-0 rtl:!right-auto dark:bg-zinc-700 dark:border-zinc-600 bg-clip-padding hidden">
                            <li>
                              <Link className="block w-full px-5 py-1.5 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80">
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link className="block w-full px-5 py-1.5 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80">
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link className="block w-full px-5 py-1.5 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-50/50 dark:text-gray-100 dark:hover:bg-zinc-600/80">
                                Something else here
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <StaticImage
                      src="./Profileimages/img-5.jpg"
                      className="p-1 border rounded border-gray-50 dark:border-zinc-600"
                    ></StaticImage>
                  </div>
                <div className="p-4 ">
                    <ul className="inline-flex mb-4 ">
                      <li className="ltr:mr-3 rtl:ml-3 inline-flex align-center  ">
                      <TiTag className="text-black text-sm mt-1 mr-2" />
                        <Link className="text-black">
                          Development
                        </Link>
                      </li>
                      <li className="ltr:mr-3 rtl:ml-3  inline-flex align-center  ml-5">
                      <BsChatLeftDots className="text-black  text-sm mt-1.5 mr-2" />
                        <Link className="text-black">
                          12 Comments
                        </Link>
                      </li>
                    </ul>
                    <p className="mb-4 text-black">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet
                    </p>
                    <div>
                    <div className="inline-flex align-center ">
                      <Link className="text-primary font-semibold hover:mr-3 mr-2 cursor-pointer transition-all duration-300 ease-in-out" >
                        Read more 
                      </Link>
                      <FaArrowRight className="text-primary mt-1.5 text-sm "/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleProducts;
