import React, { useEffect, useState, useRef } from "react";
import Logo from "../assets/navlogo.png";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoHomeSharp, IoPerson } from "react-icons/io5";
import { FaBookOpen, FaCircleInfo } from "react-icons/fa6";

const menuItemsData = [
  { name: "Home", icon: IoHomeSharp, path: "/" },
  { name: "Services", icon: MdOutlineMiscellaneousServices, path: "/services" },
  { name: "Clients", icon: IoPerson, path: "/clients" },
  { name: "Industries", icon: FaBookOpen, path: "/industries" },
  { name: "Expertise", icon: FaBookOpen, path: "/expertise" },
  { name: "Blogs", icon: FaBookOpen, path: "/blogs" },
  { name: "About us", icon: FaCircleInfo, path: "/aboutus" },
];

function MobileNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav
        className="top-0 flex justify-between items-center h-16 px-4 py-2 z-50"
        style={{
          background: "rgba(7, 5, 8, 0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Logo */}
        <Link to="/">
          <img src={Logo} className="h-[36px]" alt="Logo" />
        </Link>

        <div className="flex items-center space-x-3">
          {/* Contact Us Button */}
          <Link
            to="/contact-us"
            className="btn-premium-blue text-sm font-semibold py-2 px-5 rounded-full"
          >
            Contact Us
          </Link>

          {/* Hamburger Toggle */}
          <button
            onClick={toggleMenu}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-[#8791AD] hover:text-white hover:border-[#3567FF]/40 transition-all duration-200"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Slide-down Drawer */}
      <div
        ref={menuRef}
        className={`transition-all duration-300 ease-in-out w-full absolute z-40 ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          background: "rgba(7, 5, 8, 0.97)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {isMenuOpen && (
          <ul className="flex flex-col py-4 px-4 space-y-1">
            {menuItemsData.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-[#3567FF]/10 text-[#3567FF] border border-[#3567FF]/20"
                        : "text-[#8791AD] hover:text-white hover:bg-white/5"
                    }`}
                    onClick={toggleMenu}
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default MobileNavBar;
