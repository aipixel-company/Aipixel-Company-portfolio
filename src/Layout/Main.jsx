import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

export default function HomeLayout() {
  return (
    <div className="">
      <div className="">
        <Nav />
      </div>
      <div className=""> 
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
