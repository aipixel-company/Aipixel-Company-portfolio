import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/navlogo.png";
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
  GlobeAltIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  CloudIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { Square3Stack3DIcon, LightBulbIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoHomeSharp, IoPerson } from "react-icons/io5";
import { FaBookOpen, FaCircleInfo } from "react-icons/fa6";

// ---------------- UNIFIED MENU DATA ----------------
const menuItemsData = [
  {
    name: "Home",
    path: "/",
    icon: IoHomeSharp,
    mobileOnly: true,
  },
  {
    name: "Services",
    path: "/services",
    icon: BriefcaseIcon,
    mobileIcon: MdOutlineMiscellaneousServices,
  },
  {
    name: "Solutions",
    icon: Square3Stack3DIcon,
    mobileIcon: FaBookOpen,
    items: [
      {
        title: "Industries",
        description: "Empowering sectors with digital innovation.",
        icon: GlobeAltIcon,
        path: "/industries",
        tag: "10+",
      },
      {
        title: "Expertise",
        description: "Core technical capabilities and domain mastery.",
        icon: CpuChipIcon,
        path: "/expertise",
        tag: "Expert",
      },

    ],
  },
  {
    name: "Clients",
    path: "/clients",
    icon: UsersIcon,
    mobileIcon: IoPerson,
  },
  {
    name: "Resources",
    icon: BookOpenIcon,
    mobileIcon: FaBookOpen,
    items: [
      {
        title: "Blogs",
        description: "Insights and stories from our team.",
        icon: BookOpenIcon,
        path: "/blogs",
        tag: "Read",
      },

    ],
  },
  {
    name: "About",
    path: "/aboutus",
    icon: BuildingOffice2Icon,
    mobileIcon: FaCircleInfo,
  },
];

// ---------------- DROPDOWN / MENU HANDLER ----------------
function NavListMenu({ name, items, path, icon: Icon, mobileIcon: MobileIcon, scrolled, isHomePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (targetPath) => {
    navigate(targetPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const textColor = isHomePage
    ? (scrolled ? "text-gray-700" : "text-white/90")
    : "text-gray-700";

  if (!items) {
    return (
      <Typography
        as="div"
        variant="small"
        className={`font-medium cursor-pointer relative group ${textColor}`}
      >
        <ListItem
          className="flex items-center gap-2 py-2 px-3 font-semibold text-[15px] tracking-wide transition-all duration-300 hover:bg-transparent focus:bg-transparent"
          onClick={() => handleLinkClick(path)}
        >
          {name}
          <span className="absolute left-0 bottom-0 w-0 h-[2.5px] bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
        </ListItem>
      </Typography>
    );
  }

  // Premium dropdown items with tags
  const renderItems = items.map(({ icon: ItemIcon, title, description, path, tag }, key) => (
    <MenuItem
      key={key}
      className="flex items-start gap-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-indigo-50/40 focus:bg-gradient-to-r focus:from-blue-50/80 focus:to-indigo-50/40 p-5 transition-all duration-300 shadow-sm hover:shadow-xl hover:scale-[1.02] border border-transparent hover:border-blue-100/50 group relative overflow-hidden"
      onClick={() => handleLinkClick(path)}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:via-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>

      <div className="flex items-start gap-4 relative z-10 w-full">
        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 p-2.5 flex-shrink-0 group-hover:from-blue-100 group-hover:to-blue-200/50 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
          <ItemIcon className="h-6 w-6 text-blue-600 group-hover:scale-110 group-hover:text-blue-700 transition-all duration-300" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <Typography variant="h6" color="blue-gray" className="text-sm font-semibold tracking-tight group-hover:text-blue-700 transition-colors duration-300">
              {title}
            </Typography>
            {tag && (
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 border border-blue-200/30">
                {tag}
              </span>
            )}
          </div>
          <Typography variant="paragraph" className="text-xs font-normal text-gray-500 mt-0.5 group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </Typography>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <SparklesIcon className="h-4 w-4 text-blue-400" />
        </div>
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
            className={`font-medium cursor-pointer relative group ${textColor}`}
          >
            <ListItem
              className="flex items-center gap-1.5 py-2 px-3 font-semibold text-[15px] tracking-wide transition-all duration-300 hover:bg-transparent focus:bg-transparent"
              selected={isMenuOpen}
            >
              {name}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-all duration-300 ${isMenuOpen ? "rotate-180 text-blue-600" : ""
                  }`}
              />
              <span className="absolute left-0 bottom-0 w-0 h-[2.5px] bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden lg:block p-6 border-none shadow-2xl rounded-2xl bg-white/95 backdrop-blur-xl ring-1 ring-black/5 min-w-[580px] max-w-[700px]">
          <ul className="grid gap-3" style={gridStyle}>
            {renderItems}
          </ul>
        </MenuList>
      </Menu>

      {/* Mobile Dropdown */}
      <div className="block lg:hidden w-full">
        <ListItem
          className="flex items-center gap-3 py-3.5 px-4 font-semibold text-[15px] border-b border-gray-100/80 hover:bg-blue-50/30 rounded-xl transition-all duration-200"
          onClick={() => setIsMobileMenuOpen((cur) => !cur)}
        >
          {MobileIcon && <MobileIcon className="h-5 w-5 text-blue-600" />}
          <span className="text-gray-800">{name}</span>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 ml-auto transition-transform duration-300 ${isMobileMenuOpen ? "rotate-180" : ""
              }`}
          />
        </ListItem>
        <Collapse open={isMobileMenuOpen}>
          <ul className="ml-6 space-y-1.5 p-2 bg-gray-50/50 rounded-2xl">
            {items.map(({ title, path, tag }, key) => (
              <ListItem
                key={key}
                className="flex items-center justify-between py-2.5 px-4 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all duration-200"
                onClick={() => handleLinkClick(path)}
              >
                <span>{title}</span>
                {tag && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600">
                    {tag}
                  </span>
                )}
              </ListItem>
            ))}
          </ul>
        </Collapse>
      </div>
    </>
  );
}

// ---------------- NAV LIST ----------------
function NavList({ scrolled, isHomePage }) {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center w-full">
      <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-6 xl:gap-8">
        {menuItemsData
          .filter(item => !item.mobileOnly)
          .map((menuItem, index) => (
            <div key={index} className="lg:m-0">
              <NavListMenu {...menuItem} scrolled={scrolled} isHomePage={isHomePage} />
            </div>
          ))}
      </ul>
      <div className="flex w-full lg:w-auto mt-4 lg:mt-0 lg:ml-8 items-center justify-center">
        <Button
          className="py-2.5 px-7 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-[1.04] active:scale-[0.96] transition-all duration-300 text-sm font-bold tracking-wide relative overflow-hidden group"
          onClick={() => handleLinkClick("/contact-us")}
          size="sm"
        >
          <span className="relative z-10">Contact Us</span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Button>
      </div>
    </div>
  );
}

// ---------------- MOBILE NAV BAR ----------------
function MobileNavBar({ isHomePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef();
  const navigate = useNavigate();

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

  // Different styles for home page vs other pages
  const navBg = isHomePage
    ? "rgba(7, 5, 8, 0.92)"
    : "rgba(255, 255, 255, 0.95)";
  const navBorder = isHomePage
    ? "1px solid rgba(255,255,255,0.06)"
    : "1px solid rgba(0,0,0,0.06)";
  const textColor = isHomePage ? "text-white/60" : "text-gray-600";
  const textColorHover = isHomePage ? "text-white" : "text-gray-900";
  const borderColor = isHomePage ? "border-white/10" : "border-gray-200/50";
  const borderHover = isHomePage ? "border-blue-500/40" : "border-blue-500/40";
  const iconColor = isHomePage ? "text-white/60" : "text-gray-600";
  const linkBgActive = isHomePage
    ? "bg-blue-600/15 text-blue-400 border border-blue-500/20"
    : "bg-blue-600/10 text-blue-600 border border-blue-500/20";

  return (
    <>
      <nav
        className="lg:hidden fixed top-0 left-0 right-0 flex justify-between items-center h-16 px-5 py-2 z-50 transition-all duration-300"
        style={{
          background: navBg,
          backdropFilter: "blur(24px)",
          borderBottom: navBorder,
        }}
      >
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-[34px] w-auto" alt="Logo" />
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/contact-us"
            className={`text-sm font-semibold py-2 px-5 rounded-full transition-all duration-300 ${isHomePage
              ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 active:scale-95"
              : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 active:scale-95"
              }`}
          >
            Contact
          </Link>

          <button
            onClick={toggleMenu}
            className={`w-10 h-10 flex items-center justify-center rounded-xl border ${borderColor} ${iconColor} hover:text-white hover:${borderHover} transition-all duration-200`}
          >
            <span className="sr-only">Menu</span>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-16 left-0 right-0 z-40 transition-all duration-300 ease-out ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        style={{
          background: isHomePage ? "rgba(7, 5, 8, 0.98)" : "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(24px)",
          borderBottom: isHomePage ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)",
          maxHeight: "calc(100vh - 64px)",
          overflowY: "auto",
        }}
      >
        {isMenuOpen && (
          <ul className="flex flex-col py-3 px-4 space-y-0.5">
            {menuItemsData.map((item, index) => {
              const isActive = location.pathname === item.path;
              const Icon = item.mobileIcon || item.icon;

              if (item.items) {
                return (
                  <li key={index} className="mb-1">
                    <div className="flex flex-col">
                      <div className={`flex items-center gap-3 px-4 py-3 font-semibold text-[15px] ${isHomePage ? "text-white/60" : "text-gray-600"}`}>
                        {Icon && <Icon className={`w-4.5 h-4.5 flex-shrink-0 ${isHomePage ? "text-white/60" : "text-gray-600"}`} />}
                        <span>{item.name}</span>
                      </div>
                      <div className="ml-6 space-y-0.5">
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className={`flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${isHomePage ? "text-white/50 hover:text-white hover:bg-white/5" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"}`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-center gap-3">
                              <subItem.icon className={`w-4 h-4 flex-shrink-0 ${isHomePage ? "text-white/50" : "text-gray-500"}`} />
                              <span className="font-medium text-sm">{subItem.title}</span>
                            </div>
                            {subItem.tag && (
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isHomePage ? "bg-blue-500/20 text-blue-400" : "bg-blue-500/10 text-blue-600"}`}>
                                {subItem.tag}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                      ? linkBgActive
                      : isHomePage
                        ? `${textColor} hover:text-white hover:bg-white/5`
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {Icon && <Icon className={`w-4.5 h-4.5 flex-shrink-0 ${isActive ? (isHomePage ? "text-blue-400" : "text-blue-600") : ""}`} />}
                    <span className="font-semibold text-[15px]">{item.name}</span>
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

// ---------------- MAIN NAV (DESKTOP) ----------------
export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop nav styles based on page and scroll
  const getNavStyles = () => {
    if (isHomePage) {
      return scrolled
        ? "bg-white/85 backdrop-blur-xl shadow-2xl shadow-black/5 border border-white/50"
        : "bg-white/8 backdrop-blur-xl border border-white/15";
    } else {
      return "bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/5 border border-white/50";
    }
  };

  const getTextColor = () => {
    if (isHomePage && !scrolled) return "text-white";
    return "text-gray-900";
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div
        className={`hidden lg:block fixed w-[94%] max-w-[1280px] left-1/2 -translate-x-1/2 mt-4 z-50 transition-all duration-500 rounded-2xl ${getNavStyles()}`}
      >
        <div className="flex items-center justify-between px-7 py-2.5">
          {/* Logo */}
          <div
            onClick={() => handleLinkClick("/")}
            className="cursor-pointer flex items-center transition-transform duration-300 hover:scale-[1.02]"
          >
            <img src={Logo} className="h-9 w-auto" alt="Logo" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <NavList scrolled={scrolled} isHomePage={isHomePage} />
          </div>

          {/* Mobile Toggle */}
          <IconButton
            variant="text"
            color={isHomePage && !scrolled ? "white" : "blue-gray"}
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

        {/* Mobile Dropdown */}
        <Collapse
          open={openNav}
          className="lg:hidden bg-white/98 backdrop-blur-xl shadow-2xl rounded-2xl mt-1 overflow-y-auto max-h-[80vh] p-4"
        >
          <NavList scrolled={true} isHomePage={false} />
        </Collapse>
      </div>

      {/* Mobile Navigation */}
      <MobileNavBar isHomePage={isHomePage} />
    </>
  );
}