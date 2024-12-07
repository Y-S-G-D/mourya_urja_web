"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RingLogo from "@/app/assets/ring-logo.png";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { websiteName } from "@/shared/constant";
import { navMenus } from "@/shared/nav-menus";
import LocalStorage from "@/utils/local-storage/local-storage";
import { useAuthStore } from "@/stores/auth-store";
import { Button } from "../ui/button";
import { Dialog ,DialogTrigger} from "../ui/dialog";
import { LogoutDialog } from "../dialogs/logout-dialog";

const Navbar = ({ bgColor }: { bgColor: string | null }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const { checkLogin, isLoggedin, logout , showLogoutDialog, handleLogoutDialog } = useAuthStore();

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const checkUserLoggedIn = useCallback(() => {
    checkLogin();
    console.log("User login ", isLoggedin);
  }, [checkLogin, isLoggedin]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const getUserIdFromLocalStorage = () => {
      const userId = LocalStorage.getInstance().getLoginInfo()?._id;
      setUserId(userId);
    };

    checkUserLoggedIn();

    getUserIdFromLocalStorage();
    window.addEventListener("scroll", handleScroll);

    console.log("Use Effect called");

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [checkUserLoggedIn]);
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
          <ul className="text-base rounded-3xl flex md:space-x-6 lg:space-x-8 items-center bg-accent/80 py-3 px-6 text-foreground ">
            {navMenus.map((menu, index) => (
              <li
                key={index}
                className="text-nowrap hover:text-sidebar-primary items-center hover:-translate-y-[2px] transform transition duration-300"
              >
               {menu.url === "/login" ? (
                  isLoggedin ? (
                    <Dialog
                      open={showLogoutDialog}
                      onOpenChange={() => handleLogoutDialog(false)}>
                     <DialogTrigger  asChild>
                     <Button
                      variant={"secondary"}
                      onClick={() => {
                        handleLogoutDialog(true);
                      }}
                    >
                      Log out
                    </Button>
                       <LogoutDialog  onCancel={() => {
                        handleLogoutDialog(false);
                       }} onLogout = { () =>{
                        logout();
                        window.location.reload();
                       }}/>



                     </DialogTrigger>
                    </Dialog>
                                      ) : (
                    <Link
                      href={
                        menu.title === "My Profile"
                          ? `${menu.url}/${userId}`
                          : menu.url
                      }
                    >
                      {menu.title}
                    </Link>
                  )
                ) : (
                  <Link
                    href={
                      menu.title === "My Profile"
                        ? `${menu.url}/${userId}`
                        : menu.url
                    }
                  >
                    {menu.title}
                  </Link>
                )}
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
                {menu.url === "/login" ? (
                  isLoggedin ? (
                    <Button
                      onClick={() => {
                        logout();
                        window.location.reload();
                      }}
                    >
                      LogOut
                    </Button>
                  ) : (
                    <Link
                      href={
                        menu.title === "My Profile"
                          ? `${menu.url}/${userId}`
                          : menu.url
                      }
                    >
                      {menu.title}
                    </Link>
                  )
                ) : (
                  <Link
                    href={
                      menu.title === "My Profile"
                        ? `${menu.url}/${userId}`
                        : menu.url
                    }
                  >
                    {menu.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
