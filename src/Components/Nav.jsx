import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import logo from "../assets/navlogo.png";
import {
  Collapse,
  Typography,
  IconButton,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Bars4Icon, TagIcon, UserGroupIcon } from "@heroicons/react/24/solid";

const menuItemsData = [
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Industries & Expertise",
    items: [
      {
        title: "Industries",
        description: "Industries we work with",
        icon: Bars4Icon,
        path: "/industries",
      },
      {
        title: "Expertise",
        description: "Our Expertise",
        icon: Bars4Icon,
        path: "/expertise",
      },
    ],
    maxItemsPerRow: 2,
  },
  {
    name: "Clients",
    path: "/clients",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "About Us",
    path: "/aboutus",
  },
];

function NavListMenu({ name, items, path, scrolled, maxItemsPerRow }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!items) {
    return (
      <Typography as="div" variant="small" className="font-medium ">
        <ListItem className="flex items-center gap-2 py-2 pr-4 font-semibold no-hover-effect">
          <Link to={path} onClick={() => handleLinkClick(path)}>
            {name}
          </Link>
        </ListItem>
      </Typography>
    );
  }

  const renderItems = items.map(({ title, description, path }, key) => (
    <MenuItem
      key={key}
      className="flex items-center gap-3 rounded-lg no-hover-effect"
      onClick={() => handleLinkClick(path)}
    >
      <Link to={path}>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold no-hover-effect"
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs font-medium text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </Link>
    </MenuItem>
  ));

  const menuWidth = items
    ? `w-${Math.min(items.length, maxItemsPerRow) * 48}`
    : "";

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className={"flex items-center gap-2 py-2 pr-4 font-semibold no-hover-effect "}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {name}
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          className={`${
            name === "Clients" || name === "Blogs" || name === "Services" || name === "About Us"
              ? "w-48 left-auto right-auto"
              : `block absolute top-full left-0 right-0 ${menuWidth}`
          } `}
        >
          <ul
            className={`${
              name === "Clients" || name === "Blogs" || name === "Services" || name === "About Us" 
                ? "flex flex-col rounded-3xl" 
                : "grid"
            } gap-y-2  w-full h-full`}
            style={{
              gridTemplateColumns: `repeat(${Math.min(
                items.length,
                maxItemsPerRow
              )}, 1fr)`,
            }}
          >
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList({ scrolled }) {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex items-center w-full mt-2">
      <div className="flex items-center mx-7 space-x-14">
        {menuItemsData.map((menuItem, index) => (
          <NavListMenu key={index} {...menuItem} scrolled={scrolled} className="no-hover-effect" />
        ))}
      </div>
      <div className="flex w-max mx-14 gap-10">
        <button
          className="flex items-center py-2 px-[30px] rounded-full bg-black text-white hover:bg-blue-700"
          onClick={() => handleLinkClick("/contact-us")}
        >
          Contact Us
        </button>
        <div className={` m-auto ${scrolled ? "text-black" : "text-white"}`}>
          <IoIosSearch style={{ fontSize: "2rem"  }} />
        </div>
      </div>
    </div>
  );
}

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

  return (
    <div
      className={`py-3 items-center flex-row ${
        scrolled
          ? " bg-white drop-shadow-lg slide-down"
          : "bg-transparent text-white"
      } px-[50px] w-full fixed box-border z-50`}
    >
      <div className="flex items-center">
        <div
          onClick={() => handleLinkClick("/")}
          className="h-full cursor-pointer"
        >
          <img src={logo} className="h-11 mt-0 w-20 ml-4" alt="Logo" />
        </div>
        <div className="hidden lg:block ">
          <NavList scrolled={scrolled} />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
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
      <Collapse open={openNav}>
        <NavList scrolled={scrolled} />
      </Collapse>
    </div>
  );
}
