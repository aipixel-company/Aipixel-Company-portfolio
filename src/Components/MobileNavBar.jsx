import React, { useEffect, useState } from "react";
import Logo from "../assets/navlogo.png";
import { Link, useLocation } from "react-router-dom";
import {
  MdOutlineMiscellaneousServices,
  MdNotificationsActive,
} from "react-icons/md";
import { IoHomeSharp, IoPerson } from "react-icons/io5";
import { FaBookOpen, FaCircleInfo } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";

const menuItemsData = [
  {
    name: "Home",
    icon: IoHomeSharp,
    path: "/",
  },
  {
    name: "Services",
    icon: MdOutlineMiscellaneousServices,
    path: "/services",
  },
  {
    name: "Clients",
    icon: IoPerson,
    path: "/clients",
  },
  
  {
    name: "Industries",
    icon: FaBookOpen,
    path: "/industries",
  },
  {
    name: "Expertise",
    icon: FaBookOpen,
    path: "/expertise",
  },
  {
    name: "Blogs",
    icon: FaBookOpen,
    path: "/blogs",
  },
  {
    name: "About us",
    icon: FaCircleInfo,
    path: "/aboutus",
  },
];

function MobileNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white  top-0 flex justify-between items-center h-15 p-3">
        {/* Logo */}
        <Link to="/" className="">
          <img src={Logo} className="h-[40px]" alt="Logo" />
        </Link>
        <div className="flex items-center space-x-2">
          {/* Contact Us Button */}
          <Link to="/contact-us" className="bg-black text-sm font-medium text-white py-2 px-6 rounded-full">
            Contact Us
          </Link>
          {/* Toggle Button */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center  w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden block w-full bg-white dark:bg-gray-900">
          <ul className="font-medium flex flex-col p-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            {menuItemsData.map((item, index) => (
              <li key={index} className="py-2">
                <Link
                  to={item.path}
                  className="flex items-center space-x-3 rtl:space-x-reverse text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white rounded p-2"
                  onClick={toggleMenu}
                >
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileNavBar;
