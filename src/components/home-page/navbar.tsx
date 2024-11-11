"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Import Shadcn Button component
// import Link from 'next/link';
import Image from "next/image";
import RingLogo from "@/app/assets/ring-logo.png";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <header className="bg-black/30 px-8 w-full fixed z-50 text-accent flex items-center justify-between h-20">
      <div className="flex items-center">
        <Image alt="Logo-Image" src={RingLogo.src} width={70} height={80} />
        <h1 className="text-xl md:hidden lg:flex font-bold  mx-2 opacity-80">
          Mourya Urja Matrimonial
        </h1>
      </div>
      <nav  className="flexrelative ">
        {/* Desktop Menus */}
        <div className=" lg:w-8/12  md:flex hidden items-center justify-around">
          <ul className="text-base rounded-3xl flex md:space-x-6 lg:space-x-8  bg-accent/80 py-3 px-6 text-foreground ">
            <li className="text-nowrap">Home</li>
            <li className="text-nowrap">About Us</li>
            <li className="text-nowrap">Why Us</li>
            <li className="text-nowrap">Our Stories</li>
            <li className="text-nowrap">Contact Us</li>
          </ul>
          <Button
            className="ml-6  py-3 px-6 text-base rounded-3xl"
            variant={"secondary"}
          >
            Log In
          </Button>
        </div>
        {/* Hamburger Icon */}
        <div onClick={handleDrawer} className="md:hidden flex z-50">
          {isDrawerOpen ? <FaTimes className="text-xl font-bold" /> : <RiMenu3Fill className="text-xl font-bold" />}
        </div>
        {/* Mobile Menus */}
        <div className={`${isDrawerOpen?'animate-fadeIn  transition duration-700  absolute inset-0 top-20  md:hidden flex flex-col ':'hidden'}`}>
          <ul className="text-base  flex flex-col justify-center items-center  md:space-x-6 lg:space-x-8  bg-accent/80 py-3 px-6 text-foreground ">
            <li className="py-2 text-xl text-nowrap">Home</li>
            <li className="py-2 text-xl text-nowrap">About Us</li>
            <li className="py-2 text-xl text-nowrap">Why Us</li>
            <li className="py-2 text-xl text-nowrap">Our Stories</li>
            <li className="py-2 text-xl text-nowrap">Contact Us</li>
            <li className="py-2 text-xl text-nowrap">Log In</li>


          </ul>
          </div>
        
      </nav>
    </header>
  );
};

export default Navbar;
