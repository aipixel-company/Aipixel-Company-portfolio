import React from "react";
import { IoIosSearch } from "react-icons/io";
import logo from "../assets/navlogo.png";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const menuItemsData = [
  {
    name: "About Us",
    items: [
      {
        title: "Mission",
        description: "Our mission statement",
        icon: UserGroupIcon,
      },
      { title: "Team", description: "Meet our team", icon: UserGroupIcon },
      // Add more submenu items related to About Us
    ],
  },
  {
    name: "Services",
    items: [
      {
        title: "Testimonials",
        description: "Client testimonials",
        icon: TagIcon,
      },
      {
        title: "Partners",
        description: "Our esteemed partners",
        icon: TagIcon,
      },
      // Add more submenu items related to Clients
    ],
  },
  {
    name: "Industries & Expertise",
    items: [
      {
        title: "Latest Posts",
        description: "Read our latest posts",
        icon: Bars4Icon,
      },
      {
        title: "Categories",
        description: "Explore blog categories",
        icon: Bars4Icon,
      },
      // Add more submenu items related to Blogs
    ],
  },
  {
    name: "Clients",
    items: [
      {
        title: "Latest Posts",
        description: "Read our latest posts",
        icon: Bars4Icon,
      },
      {
        title: "Categories",
        description: "Explore blog categories",
        icon: Bars4Icon,
      },
      // Add more submenu items related to Blogs
    ],
  },
  {
    name: "Blogs",
    items: [
      {
        title: "Latest Posts",
        description: "Read our latest posts",
        icon: Bars4Icon,
      },
      {
        title: "Categories",
        description: "Explore blog categories",
        icon: Bars4Icon,
      },
      // Add more submenu items related to Blogs
    ],
  },
  // Add more menu items here
];

function NavListMenu({ name, items }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = items.map(({ icon, title, description }, key) => (
    <a href="#" key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg bg-blue-gray-50 p-2 ">
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-gray-900 w-6",
          })}
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold text-white"
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
      </MenuItem>
    </a>
  ));

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
              className="flex items-center gap-2 py-2 pr-4 font-semibold text-white" // Change font-medium to font-semibold
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {name}
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
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

function NavList() {
  return (
    <div className="flex items-center w-full mt-2">
      <div className="flex items-center mx-7 space-x-14 ">
        {menuItemsData.map((menuItem, index) => (
          <NavListMenu key={index} {...menuItem} />
        ))}
      </div>
      <div className=" flex w-max mx-14 gap-10">
        <button className="flex items-center py-2 px-[50px] rounded-full bg-black text-white">
          Contact Us
        </button>
        <div className=" text-white">
          <IoIosSearch style={{ fontSize: "2rem" }} />
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="py-3 items-center flex-row bg-transparent  px-[50px] w-full fixed box-border">
      <div className="flex items-center text-blue-gray-900">
        <div className=" h-full">
          <img src={logo} className=" h-11 mt-0 w-20 ml-4 " />
        </div>
        <div className="hidden lg:block">
          <NavList />
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
        <NavList />
      </Collapse>
    </div>
  );
}
