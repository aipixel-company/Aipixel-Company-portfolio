import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import logo from "../assets/navlogo.png"; // Ensure this path is correct
import {
  Collapse,
  Typography,
  IconButton,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  BookOpenIcon,
  BriefcaseIcon,
  UsersIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import {
  Square3Stack3DIcon, // Used for Industries/Expertise top level
  LightBulbIcon,
} from "@heroicons/react/24/solid";

// 1. UPDATED menuItemsData with icons and the fix for "Industries & Expertise"
const menuItemsData = [
  {
    name: "Services",
    path: "/services",
    icon: BriefcaseIcon,
  },
  {
    name: "Industries & Expertise",
    // FIX APPLIED: Added a top-level icon for the mobile menu header
    icon: Square3Stack3DIcon, 
    items: [
      {
        title: "Industries",
        description: "Explore the sectors we empower with digital solutions.",
        icon: Square3Stack3DIcon,
        path: "/industries",
      },
      {
        title: "Expertise",
        description: "Our core technical strengths and specialized knowledge.",
        icon: LightBulbIcon,
        path: "/expertise",
      },
    ],
  },
  {
    name: "Clients",
    path: "/clients",
    icon: UsersIcon,
  },
  {
    name: "Blogs",
    path: "/blogs",
    icon: BookOpenIcon,
  },
  {
    name: "About Us",
    path: "/aboutus",
    icon: BuildingOffice2Icon,
  },
];

// 2. NavListMenu Component: Handles both regular links and dropdown menus
function NavListMenu({ name, items, path, icon: Icon, scrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (targetPath) => {
    navigate(targetPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false); // Close menu on click
    setIsMobileMenuOpen(false); // Close mobile collapse on click
  };

  // Regular Link (No Dropdown)
  if (!items) {
    return (
      <Typography
        as="div"
        variant="small"
        className={`font-medium transition-colors duration-300 ${
          scrolled ? "text-blue-gray-800" : "text-white"
        } hover:text-blue-500`}
      >
        <ListItem
          className="flex items-center gap-2 py-2 pr-4 font-semibold p-2"
          onClick={() => handleLinkClick(path)}
        >
          {/* Subtle underline effect on hover */}
          <span className="relative p-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300">
            {name}
          </span>
        </ListItem>
      </Typography>
    );
  }

  // Dropdown/Mega-Menu Renderer (Desktop)
  const renderItems = items.map(({ icon: ItemIcon, title, description, path }, key) => (
    <MenuItem
      key={key}
      className="flex items-start gap-4 rounded-lg hover:bg-blue-50 focus:bg-blue-50 p-3 transition-all duration-200"
      onClick={() => handleLinkClick(path)}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 p-2 flex-shrink-0">
        <ItemIcon className="h-5 w-5 text-blue-600" />
      </div>
      <div>
        <Typography
          variant="h6"
          color="blue-gray"
          className="flex items-center text-sm font-bold"
        >
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="text-xs font-normal text-blue-gray-500 max-w-[200px] whitespace-normal"
        >
          {description}
        </Typography>
      </div>
    </MenuItem>
  ));

  const numItems = items.length;
  // Dynamic grid setup for the mega menu
  const gridStyle = {
    gridTemplateColumns: `repeat(${Math.min(numItems, 2)}, 1fr)`,
  };

  return (
    <React.Fragment>
      {/* Desktop Menu */}
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom-start"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className={`font-medium transition-colors duration-300 ${
              scrolled ? "text-blue-gray-800" : "text-white"
            } hover:text-blue-500`}
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-semibold p-0"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300">
                {name}
              </span>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl lg:block w-auto p-4 border-none shadow-xl rounded-xl">
          <ul
            className="grid gap-4 overflow-hidden"
            style={gridStyle}
          >
            {renderItems}
          </ul>
        </MenuList>
      </Menu>

      {/* Mobile Menu */}
      <div className="block lg:hidden w-full">
        {/* Mobile Dropdown Header */}
        <ListItem
            className="flex items-center gap-2 py-2 pr-4 font-semibold border-t border-gray-100 mt-2"
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
        >
            <Icon className="h-4 w-4 text-blue-600" />
            <span className={`transition-colors duration-300 ${scrolled ? "text-blue-gray-800" : "text-blue-gray-800"}`}>
                {name}
            </span>
            <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 ml-auto transition-transform ${
                isMobileMenuOpen ? "rotate-180" : ""
                }`}
            />
        </ListItem>
        {/* Mobile Dropdown Body (Simple List) */}
        <Collapse open={isMobileMenuOpen}>
          <ul className="ml-4 space-y-1 p-2 bg-gray-50/50 rounded-lg">
             {items.map(({ title, path }, key) => (
                <ListItem 
                    key={key} 
                    className="py-2 text-sm font-medium" 
                    onClick={() => handleLinkClick(path)}
                >
                    {title}
                </ListItem>
             ))}
          </ul>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

// 3. NavList Component: Combines all menu items and contact button
function NavList({ scrolled }) {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center w-full lg:mt-0">
      <ul className="flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-12 p-0 lg:p-0">
        {menuItemsData.map((menuItem, index) => (
          // For non-dropdown links on mobile, we need a simple wrapper
          menuItem.items ? (
            <NavListMenu key={index} {...menuItem} scrolled={scrolled} />
          ) : (
            <div key={index} className="lg:m-0 m-2">
                <NavListMenu {...menuItem} scrolled={scrolled} />
            </div>
          )
        ))}
      </ul>
      <div className="flex w-full lg:w-max mt-4 lg:mt-0 lg:ml-8 items-center lg:justify-start justify-center">
        <Button
          className="py-3 px-8 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300 text-sm font-bold"
          onClick={() => handleLinkClick("/contact-us")}
          size="sm"
        >
          <span className="tracking-wide">CONTACT US</span>
        </Button>
        {/* Search icon is cleaner to put next to the button */}
        <div
          className={`hidden lg:block m-auto ml-5 p-2 rounded-full transition-colors cursor-pointer ${
            scrolled ? "text-gray-700" : "text-white"
          } hover:text-blue-500`}
        >
          {/* <IoIosSearch style={{ fontSize: "1.7rem" }} /> */}
        </div>
      </div>
    </div>
  );
}

// 4. Main Nav Component: Handles scroll and responsiveness
export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; 
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Closes mobile menu on window resize
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <div
      className={`py-4 items-center flex-col transition-all duration-300 ${
        scrolled
          ? "bg-white drop-shadow-lg text-blue-gray-800"
          : "bg-transparent text-white"
      } px-4 lg:px-12 w-full fixed box-border z-50`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleLinkClick("/")}
          className="h-full cursor-pointer flex-shrink-0"
        >
          <img
            src={logo}
            className="h-10 w-auto transition-all duration-300"
            alt="Logo"
          />
        </div>
        
        {/* Desktop Nav List */}
        <div className="hidden lg:block">
          <NavList scrolled={scrolled} />
        </div>

        {/* Mobile Nav Button */}
        <IconButton
          variant="text"
          color={scrolled ? "blue-gray" : "white"}
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      {/* Mobile Collapse Menu */}
      <Collapse open={openNav} className="lg:hidden bg-white/95 backdrop-blur-sm shadow-xl mt-2 rounded-xl overflow-y-auto max-h-[80vh] p-4">
        <NavList scrolled={true} />
      </Collapse>
    </div>
  );
}