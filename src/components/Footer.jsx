'use client';
import React from "react";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" overflow-x-hidden w-full  bg-gray-900 pl-12 pr-12 mt-12 py-8 text-gray-300 ">
      <div className="grid md:grid-cols-3  grid-cols-1gap-8">
        <div className="mb-8 ">
          <div className="flex items-center justify-start">
            <img
              src="/images/logo.png"
              alt="Logo Image"
              className="h-28 w-32 rounded-full mr-4"
            />
            <h1 className="text-2xl font-semibold uppercase">Veliciae</h1>
          </div>
          <p className="mt-2">
            The Quest For Luxury Ends Here!
          </p>
          <p className="mt-4">© 2024 Veliciae  | All Rights Reserved</p>

          <a target="_blank" href= "https://ygsd.in"><p className="mt-4">Developed By ygsd.in</p></a>
        </div>
        {/* Quick Links Section */}
        <div className="flex flex-col justify-start md:items-center items-start mb-8">
          <h1 className="text-xl text-primary">Quick Links</h1>
          <ul className="flex md:flex-col flex-wrap">
            <li className="mx-2 hover:text-secondary cursor-pointer py-1">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-2 hover:text-secondary cursor-pointer py-1">
              <Link href="/">Cart</Link>
            </li>
            <li className="mx-2 hover:text-secondary cursor-pointer py-1">
              <Link href="/">Products</Link>
            </li>
            <li className="mx-2 hover:text-secondary cursor-pointer py-1">
              <Link href="/">Contact Us</Link>
            </li>
            <li className="mx-2 hover:text-secondary cursor-pointer py-1">
              <Link href="/">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-left mb-8">
          <h1 className="text-xl text-primary">Contacts</h1>
          <div className="mt-2">
          <p className="mx-2 py-1  ">Phone: +91 12345 67890</p>
          <p className="mx-2 py-1">Email: service@xyz.in,  info@xyz.com </p>
          <p className="mx-2 py-1">Address: XYZ Road, ABC City, 12345
                {/* <br />
                Hotel DRS Deluxe
                <br />
                Main Road, Purani Bazar
                <br />
                Lakhisarai-Bihar 811311 (India) */}
                </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
