import React from "react";
// import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "gatsby";

const Sidebar = () => {
  return (
    <div className="  bottom-0 z-10 h-screen  vertical-menu rtl:right-0 top-[110px] bg-slate-50  print:hidden  ">
      <div data-simplebar className="h-full">
        <div className="metismenu pb-10 pt-2.5" id="sidebar-menu">
          <ul id="side-menu">
            <li
              className="px-5 py-3 text-xs font-medium text-gray-500 cursor-default leading-[18px] group-data-[sidebar-size=sm]:hidden block"
              data-key="t-menu"
            >
              Menu
            </li>

            <li>
              <Link
                to="/"
                className="block py-2.5  px-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear dark:text-gray-300 "
              >
                
                <span data-key="t-dashboard" className="text-primary font-semibold border-b border-primary"> User Profile </span>
              </Link>
            </li>

            <li>
              <Link
                to="/"
                aria-expanded="false"
                className="block py-2.5 px-6 text-sm font-medium hover:text-primary text-gray-950 transition-all duration-150 ease-linear nav-menu  dark:text-gray-300 "
              >
                <i
                  data-feather="grid"
                  className="align-middle"
                  fill="#545a6d33"
                ></i>
                <span data-key="t-apps"> Messages </span>
              </Link>
            </li>

            <li>
              <Link
                to="/"
                aria-expanded="false"
                className="block :rtl:pr-10 py-2.5 px-6 text-sm hover:text-primary font-medium text-gray-950 transition-all duration-150 ease-linear nav-menu  dark:text-gray-300 "
              >
                <i data-feather="users" fill="#545a6d33"></i>
                <span data-key="t-auth" >Buying Leads </span>
              </Link>
            </li>

            <li>
              <Link
                to="/"
                aria-expanded="false"
                className="block py-2.5 px-6 text-sm font-medium text-gray-950 hover:text-primary transition-all duration-150 ease-linear nav-menu  dark:text-gray-300 "
              >
                <i data-feather="briefcase" fill="#545a6d33"></i>
                <span data-key="t-pages">Orders </span>
              </Link>
            </li>

            <li
              className="px-5 py-3 mt-2 text-sm font-medium text-gray-300  hover:text-primary  cursor-pointer leading-[18px] group-data-[sidebar-size=sm]:hidden "
              data-key="t-elements"
              
            >
              
              <span data-key="t-pages">Transactions </span>
            </li>

            <li>
              <Link
                to="/"
                aria-expanded="false"
                className="block py-2.5 px-6 text-sm hover:text-primary font-medium text-gray-950 transition-all duration-150 ease-linear nav-menu  dark:text-gray-300 "
              >
                <i data-feather="briefcase" fill="#545a6d33"></i>
                <span data-key="t-compo">Contacts </span>
              </Link>
            </li>

            <li>
              <Link
                to="/"
                aria-expanded="false"
                className="block py-2.5 px-6 text-sm font-medium hover:text-primary  text-gray-950 transition-all duration-150 ease-linear nav-menu dark:text-gray-300 "
              >
                <i data-feather="gift" fill="#545a6d33"></i>
                <span data-key="t-extend" >My Lists </span>
              </Link>
            </li>

            <li>
              <Link
                to="/"
                aria-expanded="false"
                className="block py-2.5 px-6 text-sm font-medium hover:text-primary text-gray-950 transition-all duration-150 ease-linear  dark:text-gray-300 "
              >
               
                <span data-key="t-forms" >Trade Services </span>
              </Link>
            </li>

            <li>
              <Link
                to="/"
                aria-expanded="false"
                className="block py-2.5 px-6 text-sm font-medium hover:text-primary text-gray-950 transition-all duration-150 ease-linear nav-menu dark:text-gray-300 "
              >
                <i data-feather="sliders" fill="#545a6d33"></i>
                <span data-key="t-charts" >Logistics</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
