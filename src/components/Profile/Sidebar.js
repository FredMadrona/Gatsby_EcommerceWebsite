import React from "react";
// import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'gatsby';

const Sidebar = () => {

    return(

        <div className=" fixed bottom-0 z-10 h-screen  vertical-menu rtl:right-0 w-[20%] top-[110px] bg-slate-50 border-gray-50 print:hidden  ">

        <div data-simplebar className="h-full">
            <div className="metismenu pb-10 pt-2.5" id="sidebar-menu">
                <ul id="side-menu">
                    <li className="px-5 py-3 text-xs font-medium text-gray-500 cursor-default leading-[18px] group-data-[sidebar-size=sm]:hidden block" data-key="t-menu">Menu</li>
    
                    <li>
                        <Link to="/" className="block py-2.5 px-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                            <i data-feather="home" fill="#545a6d33"></i>
                            <span data-key="t-dashboard"> Dashboard</span>
                        </Link>
                    </li>
    
                    <li>
                        <Link to="/" aria-expanded="false" className="block py-2.5 px-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear nav-menu hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                            <i data-feather="grid" className="align-middle" fill="#545a6d33"></i>
                            <span data-key="t-apps" > Apps</span>
                        </Link>
                        <ul>
                            <li>
                                <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Calendar</Link>
                            </li>
                            <li>
                                <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Chat</Link>
                            </li>
    
                            <li>
                                <Link to="/" aria-expanded="false" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear nav-menu pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                                    <span data-key="t-apps">Email</span>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Inbox</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Read Email</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/" aria-expanded="false" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear nav-menu pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                                    <span data-key="t-apps">Invoices</span>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Invoice List</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="pl-14 pr-4  py-2 block text-[13px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Invoice Detail</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/" aria-expanded="false" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear nav-menu pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                                    <span data-key="t-apps">Contacts</span>
                                </Link>
                                <ul>
                                    <li>
                                    <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">User Grid</Link>
                                    </li>
                                    <li>
                                    <Link to="/" className="pl-14 pr-4  py-2 block text-[13px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">User List</Link>
                                    </li>
                                    <li>
                                    <Link to="/" className="pl-14 pr-4  py-2 block text-[13px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Profile</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/" aria-expanded="false" className="flex items-center justify-between py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear  pl-[52.8px] pr-6 hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                                    <span data-key="t-apps">Blog</span>
                                    <span className="px-2 py-0.5 font-medium text-red-400 rounded-full bg-red-50 text-10 badge text-end group-data-[sidebar-size=sm]:hidden">New</span>
                                </Link>
                                <ul>
                                    <li>
                                    <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Blog Grid</Link>
                                    </li>
                                    <li>
                                    <Link to="/" className="pl-14 pr-4  py-2 block text-[13px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Blog List</Link>
                                    </li>
                                    <li>
                                    <Link to="/" className="pl-14 pr-4  py-2 block text-[13px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Blog Details</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
    
    
                    <li>
                        <Link to="/" aria-expanded="false" className="block :rtl:pr-10 py-2.5 px-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear nav-menu hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                            <i data-feather="users" fill="#545a6d33"></i>
                            <span data-key="t-auth" >Authentication</span>
                        </Link>
                        <ul>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Login</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Register</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Recover Password</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Lock Screen</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Log Out</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Confirm Mail</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Email Verification</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Two Step Verification</Link>
                            </li>
                        </ul>
                    </li>
    
                    <li>
                        <Link to="/" aria-expanded="false" className="block py-2.5 px-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear nav-menu hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                            <i data-feather="briefcase" fill="#545a6d33"></i><span data-key="t-pages">Pages</span>
                        </Link>
                        <ul>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Starter Page</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Maintenance</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Coming Soon</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Timeline</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">FAQs</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Pricing</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Error 404</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Error 500</Link>
                            </li>
                        </ul>
                    </li>
    
                    <li className="px-5 py-3 mt-2 text-xs font-medium text-gray-500 cursor-default leading-[18px] group-data-[sidebar-size=sm]:hidden" data-key="t-elements">Elements</li>
    
                    <li>
                        <Link to="/" aria-expanded="false" className="block py-2.5 px-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear nav-menu hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                            <i data-feather="briefcase" fill="#545a6d33"></i>
                            <span data-key="t-compo">Components</span>
                        </Link>
                        <ul>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Alerts</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Buttons</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Cards</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Dropdown</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Flexbox & Grid</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Sizing</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Avatar</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Modals</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Progress</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Tabs & Accordions</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Typography</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Toasts</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">General</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Colors</Link>
                            </li>
                            <li>
                            <Link to="/" className="pl-[52.8px] pr-6 py-[6.4px] block text-[13.5px] font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Utilities</Link>
                            </li>
                        </ul>
                    </li>
    
                    <li>
                        <Link to="/" aria-expanded="false" className="block py-2.5 px-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear nav-menu hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                            <i data-feather="gift" fill="#545a6d33"></i>
                            <span data-key="t-extend">Extended</span>
                        </Link>
                        <ul>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Lightbox</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Rangeslider</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">SweetAlert 2</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Rating</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Notifications</Link>
                            </li>
                        </ul>
                    </li>
    
    
                    <li>
                        <Link to="/" aria-expanded="false" className="block py-2.5 px-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                            <span className="badge bg-red-50 dark:bg-red-500/10 text-danger ltr:float-right rtl:float-left z-50 px-1.5 rounded-full text-11 text-red-500" data-toggle="collapse">7</span>
                            <i data-feather="box" fill="#545a6d33"></i>
                            <span data-key="t-forms">Forms</span>
                        </Link>
                        <ul>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Basic Elements</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Rangeslider</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">SweetAlert 2</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Editors</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">File Upload</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Wizard</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Mask</Link>
                            </li>
                        </ul>
                    </li>
    
                    <li>
                        <Link to="/" aria-expanded="false" className="block py-2.5 px-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear nav-menu hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                            <i data-feather="sliders" fill="#545a6d33"></i>
                            <span data-key="t-charts">Tables</span>
                        </Link>
                        <ul>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Basic Elements</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">DataTables</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Responsive</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Editable </Link>
                            </li>
                        </ul>
                    </li>
    
                    <li>
                        <Link to="/" aria-expanded="false" className="block py-2.5 px-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear nav-menu hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                            <i data-feather="pie-chart" fill="#545a6d33"></i>
                            <span data-key="t-charts">Charts</span>
                        </Link>
                        <ul>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Apexcharts</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Echarts</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Chartjs</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Jquery Knob</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Sparkline Chart</Link>
                            </li>
                        </ul>
    
                    </li>
    
                    <li>
                        <Link to="/" aria-expanded="false" className="block py-2.5 px-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear nav-menu hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                            <i data-feather="cpu" fill="#545a6d33"></i>
                            <span data-key="t-icons">Icons</span>
                        </Link>
                        <ul>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Boxicons</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Material Design</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Dripicons</Link>
                            </li>
                        </ul>
                    </li>
    
                    <li>
                        <Link to="/" aria-expanded="false" className="block py-2.5 px-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear nav-menu hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                            <i data-feather="map" fill="#545a6d33"></i>
                            <span data-key="t-maps"> Maps</span>
                        </Link>
                        <ul>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Google</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Vector</Link>
                            </li>
                            <li>
                            <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Leaflet</Link>
                            </li>
                        </ul>
                    </li>
    
                    <li className="w-full menu__item ">
                        <Link to="/" aria-expanded="false" className="block py-2.5 px-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear nav-menu hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                            <i data-feather="share-2" fill="#545a6d33"></i>
                            <span data-key="t-level">Multi Level</span>
                        </Link>
                        <div>
                            <ul>
                                <li>
                                <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Level 1.1</Link>
                                </li>
                                <li>
                                <Link to="/" data-toggle="collapse" data-target=".Level1.2-menu" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear nav-menu pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">
                                        <span data-key="t-level">Level 1.2</span>
                                    </Link>
                                    <ul className="collapse Level1.2-menu">
                                        <li>
                                        <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Level 2.1</Link>
                                        </li>
                                        <li>
                                        <Link to="/" className="block py-[6.4px] pr-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear pl-[52.8px] hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white">Level 2.2</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
    
                    </li>
    
                </ul>
    
                <div className="mx-6 my-12 text-center sidebar-alert">
                    <div className="rounded card-body bg-primary bg-violet-50/50 dark:bg-zinc-700/60">
                        <div className="mt-4">
                            <h5 className="mb-3 text-16 font-medium text-violet-500">Unlimited Access</h5>
                            <p className="text-slate-600 text-13 dark:text-gray-50">Upgrade your plan from a Free trial, to select ‘Business Plan’.</p>
                            <Link to="/" className="mt-6 text-white border-transparent btn bg-violet-500">Upgrade Now</Link>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
    )
}


export default Sidebar