import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { Square3Stack3DIcon, LightBulbIcon } from "@heroicons/react/24/solid";

// ---------------- MENU DATA ----------------
const menuItemsData = [
  {
    name: "Services",
    path: "/services",
    icon: BriefcaseIcon,
  },
  {
    name: "Industries & Expertise",
    icon: Square3Stack3DIcon,
    items: [
      {
        title: "Industries",
        description: "Explore the sectors we empower with digital innovation.",
        icon: Square3Stack3DIcon,
        path: "/industries",
      },
      {
        title: "Expertise",
        description: "Our core technical capabilities and domain mastery.",
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

// ---------------- DROPDOWN / MENU HANDLER ----------------
function NavListMenu({ name, items, path, icon: Icon, scrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (targetPath) => {
    navigate(targetPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Single link (no dropdown)
  if (!items) {
    return (
      <Typography
        as="div"
        variant="small"
        className={`font-medium cursor-pointer relative group ${
          scrolled ? "text-gray-800" : "text-white"
        }`}
      >
        <ListItem
          className="flex items-center gap-2 py-2 px-3 font-semibold transition-all duration-300"
          onClick={() => handleLinkClick(path)}
        >
          {name}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </ListItem>
      </Typography>
    );
  }

  // Dropdown items (Professional UI)
  const renderItems = items.map(({ icon: ItemIcon, title, description, path }, key) => (
    <MenuItem
      key={key}
      className="flex items-start gap-4 rounded-xl hover:bg-blue-50 focus:bg-blue-50 p-4 transition-all duration-200 shadow-sm hover:shadow-md"
      onClick={() => handleLinkClick(path)}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-100/70 p-2 flex-shrink-0">
        <ItemIcon className="h-6 w-6 text-blue-600" />
      </div>
      <div>
        <Typography variant="h6" color="blue-gray" className="text-sm font-semibold">
          {title}
        </Typography>
        <Typography variant="paragraph" className="text-xs font-normal text-blue-gray-500">
          {description}
        </Typography>
      </div>
    </MenuItem>
  ));

  const gridStyle = {
    gridTemplateColumns: `repeat(${Math.min(items.length, 2)}, 1fr)`,
  };

  return (
    <>
      {/* Desktop Dropdown */}
      <Menu open={isMenuOpen} handler={setIsMenuOpen} allowHover offset={{ mainAxis: 20 }}>
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className={`font-medium cursor-pointer relative group ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <ListItem
              className="flex items-center gap-2 py-2 px-3 font-semibold transition-all duration-300"
              selected={isMenuOpen}
            >
              {name}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden lg:block p-6 border-none shadow-2xl rounded-2xl bg-white/80 backdrop-blur-xl ring-1 ring-gray-200">
          <ul className="grid gap-5" style={gridStyle}>
            {renderItems}
          </ul>
        </MenuList>
      </Menu>

      {/* Mobile Dropdown */}
      <div className="block lg:hidden w-full">
        <ListItem
          className="flex items-center gap-2 py-2 px-3 font-semibold border-t border-gray-100 mt-2"
          onClick={() => setIsMobileMenuOpen((cur) => !cur)}
        >
          <Icon className="h-4 w-4 text-blue-600" />
          <span className="text-gray-800">{name}</span>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 ml-auto transition-transform ${
              isMobileMenuOpen ? "rotate-180" : ""
            }`}
          />
        </ListItem>
        <Collapse open={isMobileMenuOpen}>
          <ul className="ml-4 space-y-1 p-2 bg-gray-50 rounded-lg">
            {items.map(({ title, path }, key) => (
              <ListItem
                key={key}
                className="py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => handleLinkClick(path)}
              >
                {title}
              </ListItem>
            ))}
          </ul>
        </Collapse>
      </div>
    </>
  );
}

// ---------------- NAV LIST ----------------
function NavList({ scrolled }) {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center w-full">
      <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-10 xl:space-x-14">
        {menuItemsData.map((menuItem, index) => (
          <div key={index} className="lg:m-0 m-2">
            <NavListMenu {...menuItem} scrolled={scrolled} />
          </div>
        ))}
      </ul>
      <div className="flex w-full lg:w-auto mt-4 lg:mt-0 lg:ml-10 items-center justify-center">
        <Button
          className="py-3 px-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm font-bold"
          onClick={() => handleLinkClick("/contact-us")}
          size="sm"
        >
          CONTACT US
        </Button>
      </div>
    </div>
  );
}

// ---------------- MAIN NAV ----------------
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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <div
      className={`fixed w-[95%] left-1/2 -translate-x-1/2 mt-4 z-50 transition-all duration-500 rounded-full ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg text-gray-900"
          : "bg-white/20 backdrop-blur-xl text-white  border-white/30"
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-10 py-3">
        {/* Logo */}
        <div
          onClick={() => handleLinkClick("/")}
          className="cursor-pointer flex items-center"
        >
          <img src={logo} className="h-10 w-auto transition-all duration-300" alt="Logo" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <NavList scrolled={scrolled} />
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <Collapse
        open={openNav}
        className="lg:hidden bg-white/95 backdrop-blur-md shadow-xl rounded-xl mt-2 overflow-y-auto max-h-[80vh] p-4"
      >
        <NavList scrolled={true} />
      </Collapse>
    </div>
  );
}
