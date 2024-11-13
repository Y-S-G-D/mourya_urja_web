import Navbar from "@/components/home-page/navbar";
import React from "react";
import Person from "@/app/assets/person.jpeg";
import Women from "@/app/assets/women.jpeg";
import Image from "next/image";
import {
  User,
  MapPin,
  Cake,
  Briefcase,
  CheckCircle,
  Eye,
  MessageSquarePlus,
} from "lucide-react";
import { FaHeart } from "react-icons/fa6"; // Filled Heart icon
import { FaRegHeart } from "react-icons/fa"; // Outline Hea
import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CommentsSection from "@/components/comments-sheet";

interface Connection {
  userName: string;
  image: string;
  location: string;
  age: string;
  employment: string;
}

const connectionData: Connection[] = [
  {
    userName: "Shradhha Roy",
    image: `${Women.src}`,
    location: "New York, USA",
    age: "29",
    employment: "Software Engineer",
  },
  {
    userName: "Amit Sharma",
    image: `${Person.src}`,
    location: "San Francisco, USA",
    age: "32",
    employment: "Product Manager",
  },
  {
    userName: "Priya Singh",
    image: `${Women.src}`,
    location: "London, UK",
    age: "27",
    employment: "Data Scientist",
  },
  {
    userName: "John Doe",
    image: `${Person.src}`,
    location: "Sydney, Australia",
    age: "35",
    employment: "UX Designer",
  },
  {
    userName: "Jane Smith",
    image: `${Person.src}`,
    location: "Toronto, Canada",
    age: "30",
    employment: "Marketing Specialist",
  },
  {
    userName: "Carlos Mendez",
    image: `${Person.src}`,
    location: "Mexico City, Mexico",
    age: "28",
    employment: "Sales Manager",
  },
];

const ConnectionsPage = () => {
  return (
    <main>
      <Navbar bgColor={"bg-primary"} />
      <section className="bg-accent max-w-7xl w-full mx-auto pt-24 md:px-8 px-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Your Connections
        </h1>
        <div className="w-full grid auto-rows-auto sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6 px-6 lg:px-12">
          {connectionData.map((connection, index) => (
            <div
              key={index}
              className="p-4 bg-white border border-secondary rounded-2xl shadow-lg  group hover:bg-primary hover:text-accent transition duration-500"
            >
              <Image
                src={connection.image}
                alt={connection.userName}
                width={200}
                height={200}
                className="w-full h-72 sm:h-max border-4 border-secondary object-cover rounded-xl transform transition duration-500 group-hover:scale-x-105"
              />

              <h2 className="mt-2 flex items-center">
                <User
                  className="mr-2 text-primary group-hover:text-accent transition duration-500"
                  size={14}
                />
                <span className="text-lg font-bold">{connection.userName}</span>
                <Separator dir="vertical" className="h-6 w-0.5 mx-2" />
                <span className="ml-2  text-gray-600 group-hover:text-accent transition duration-500">
                  {connection.age} yrs
                </span>
                <CheckCircle
                  className="ml-2 rounded-full bg-blue-700 text-white"
                  size={14}
                />
              </h2>
              <p className="text-sm text-gray-600 group-hover:text-accent transition duration-500 flex items-center">
                <MapPin
                  className="mr-2 text-primary group-hover:text-accent transition duration-500"
                  size={14}
                />
                {connection.location}
              </p>
              <p className="text-sm text-gray-600 group-hover:text-accent transition duration-500 flex items-center">
                <Briefcase
                  className="mr-2 text-primary group-hover:text-accent transition duration-500"
                  size={14}
                />
                {connection.employment}
              </p>
              <div className="flex items-center gap-4 justify-center">
                <div className="p-2 cursor-pointer bg-accent rounded-full border border-border">
                  <FaHeart className="text-red-500" />
                </div>
                <div className="p-2 cursor-pointer bg-accent rounded-full border border-border">
                  <Eye className="text-primary" size={18} />
                </div>
                <Sheet>
                  <SheetTrigger asChild>
                    <div className="p-2  cursor-pointer bg-accent rounded-full border border-border">
                      <MessageSquarePlus className="text-primary" size={18} />
                    </div>
                  </SheetTrigger>

                  <CommentsSection />
                </Sheet>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ConnectionsPage;
