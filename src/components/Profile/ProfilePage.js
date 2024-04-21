import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { BsThreeDots } from "react-icons/bs";

const ProfilePage = () => {
  return (
    <div className=" ">
      {/* Profile Card */}
      <div className="card shadow-md p-5  mt-5 lg:mx-[5%]">
        <div className="card-body ">
          <div className="grid grid-cols-12 ">
            <div className="col-span-9  ">
              <div className="flex flex-wrap items-center">
                <div className="w-20 h-20 ltr:mr-1 rtl:ml-1">
                  <StaticImage
                    src="./Profileimages/avatar-2.jpg"
                    alt="avatar"
                    className="rounded-full cursor-pointer"
                  ></StaticImage>
                  {/* <Avatar className="rounded-full"></Avatar> */}
                </div>
                <div className="md:ml-3 mt-3 md:mt-0">
                  <h5 className="text-lg font-semibold text-black-800">
                    Juana Dela Cruz
                  </h5>
                  <p className="mb-4 text-black-800 text-13">
                    Legazpi Albay, Bicol
                  </p>

                  <div className="flex flex-wrap items-start gap-2 text-13">
                    <div className="text-grey-500 hover:underline cursor-pointer hover:text-primary">
                      <i className=" align-middle mdi mdi-circle-medium me-1 ltr:mr-1 rtl:ml-1"></i>
                      +63 9561269830
                    </div>
                    <div className="text-grey-500 hover:underline cursor-pointer hover:text-primary">
                      <i className=" align-middle mdi mdi-circle-medium me-1 ltr:mr-1 rtl:ml-1"></i>
                      Hardwares.ph
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3  ">
              <div className="flex flex-wrap items-center justify-end">
                <button className="border-transparent btn  text-gray-500">
                  <BsThreeDots className="text-lg mt-2" />
                </button>
              </div>
            </div>
          </div>
          <div className="nav-tabs border-b-tabs">
            <ul
              className="flex flex-wrap w-full text-sm font-medium text-center text-primary  nav  border-t  pt-5  mt-6 "
              id="pills-tab"
            >
              <li>
                <Link
                  to="/"
                  className="px-3 pt-5 pb-[1.4rem] font-medium active"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/" className="px-3 pt-5 pb-[1.4rem] font-medium ">
                  Sale
                </Link>
              </li>
              <li>
                <Link to="/" className="px-3 pt-5 pb-[1.4rem] font-medium ">
                  Other
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Profile Card end */}
      <div className="card bg-white shadow-md p-5 lg:mx-[5%] mt-5">
        <div className="border-b card-body border-gray-50 bg-white">
          <h5 className="text-primary font-semibold text-15 cursor-pointer">Overview</h5>
        </div>
        <div className="card-body">
          <div>
            <div className="pb-3">
              <div className="grid grid-cols-12  mt-5">
                <div className="col-span-12 md:col-span-2 ">
                  <div>
                    <h5 className="font-sm text-black text-15 cursor-pointer">
                      {" "}
                      Brief Background
                    </h5>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-10">
                  <div className="text-gray-500 ">
                    <p className="mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="mb-0">
                    Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
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

export default ProfilePage;
