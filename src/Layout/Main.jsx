import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
// import BottomNavigation from '../Components/BottomNavigation';
import MobileNavBar from '../Components/MobileNavBar';

export default function HomeLayout() {
  return (
    <div className=" p-0 m-0">
      <div className=" hidden xl:block">
        <Nav />
      </div>
      <div className=' diplaymobilenav hidden'>
        <MobileNavBar/>
      </div>
      <div> 
        <Outlet />
      </div>
      {/* <div className=' md:hidden lg:hidden block'>
        <BottomNavigation/>
      </div> */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
