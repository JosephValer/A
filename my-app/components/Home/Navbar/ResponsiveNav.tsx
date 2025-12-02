'use client';
import React from "react";
import Nav from "./Nav";
import MovilNav from "./MovilNav";

const ResponsiveNav = () => {

const [showNav,setShowNav] = React.useState(false);

const handNavOpen=()=>setShowNav(true);
const handNavClose=()=>setShowNav(false);
  return (
    <div>
      <Nav openNav={handNavOpen} />
      <MovilNav showNav={showNav} closeNav={handNavClose} />
    </div>
  );
};

export default ResponsiveNav;
