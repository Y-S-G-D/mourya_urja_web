"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RingLogo from "@/app/assets/ring-logo.png";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { websiteName } from "@/shared/constant";
import { navMenus } from "@/shared/nav-menus";
import LocalStorage from "@/utils/local-storage/local-storage";

const Navbar = ({ bgColor }: { bgColor: string | null }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${bgColor || "bg-black/30"}  ${
        isScrolled ? "bg-primary" : "bg-black/30"
      } transition duration-300 px-8 w-full fixed z-50 text-accent flex items-center justify-between h-20`}
    >
      <div className="flex items-center">
        <Image alt="Logo-Image" src={RingLogo.src} width={70} height={80} />
        <h1 className="text-xl md:hidden lg:flex font-bold  mx-2 opacity-80">
          {websiteName}
        </h1>
      </div>
      <nav className="flex">
        {/* Desktop Menus */}
        <div className=" lg:w-8/12  md:flex hidden items-center justify-around">
          <ul className="text-base rounded-3xl flex md:space-x-6 lg:space-x-8  bg-accent/80 py-3 px-6 text-foreground ">
            {navMenus.map((menu, index) => (
              <li key={index} className="text-nowrap hover:text-sidebar-primary  hover:-translate-y-[2px] transform transition duration-300">

                <Link href={menu.title==="My Profile"?`${menu.url}/${LocalStorage.getInstance().getLoginInfo()?._id}`:menu.url}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Hamburger Icon */}
        <div onClick={handleDrawer} className="md:hidden z-20">
          {isDrawerOpen ? (
            <FaTimes className="text-xl font-bold" />
          ) : (
            <RiMenu3Fill className="text-xl font-bold" />
          )}
        </div>
        {/* Mobile Menus */}
        <div
          className={`${
            isDrawerOpen
              ? " animate-fadeIn  transition duration-700  absolute  w-full top-20  left-0 justify-center items-center bg-sidebar-primary   md:hidden flex flex-col"
              : "hidden"
          }`}
        >
          <ul className="text-base md:space-x-6 lg:space-x-8  py-3 px-6 text-center  font-semibold text-sidebar-primary-foreground ">
            {navMenus.map((menu, index) => (
              <li key={index} className="py-2 text-xl text-nowrap">
                <Link href={menu.url}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
