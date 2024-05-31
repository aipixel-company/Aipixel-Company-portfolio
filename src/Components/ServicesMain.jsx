import React, { useState, useEffect } from "react";
import servicesbackground from "../assets/servicesbackground.jpg";

function ServicesMain() {
  return (
    <div
      className="flex items-center justify-between h-[70vh] "
      style={{
        backgroundImage: `url(${servicesbackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    </div>
  );
}

export default ServicesMain;
