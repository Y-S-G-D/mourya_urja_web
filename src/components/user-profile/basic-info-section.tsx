'use client'
import Image from "next/image";
import { Card,  CardTitle,  } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { FaCity, FaUserFriends, FaRulerVertical, FaBriefcase } from "react-icons/fa";
import Person from "@/app/assets/person.jpeg";
import { Playfair } from "next/font/google";
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const playfair = Playfair({subsets:["latin"]})



export default function BasicInfoSection({name,city,dob,height,jobType}:{name:string,city:string,dob:string,height:string,jobType:string}) {

  const [isLiked, setIsLiked] = React.useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  }

  return (
    <div className="w-full flex flex-col md:flex-row  justify-between rounded-lg ">
      {/* Left side - Profile Image */}
      <div className="md:w-[30%] flex items-center justify-center w-full relative  border border-border ">
        <Image
          src={Person.src} 
          alt="Profile"
          width={400} // Set image width (adjust as needed)
          height={400} // Set image height (adjust as needed)
          className="rounded-lg object-cover"
        />
        <div 
            onClick={handleLike}
            className="absolute  top-6 right-6 p-2 cursor-pointer bg-accent rounded-full border border-border">
            {isLiked?<FaHeart className="text-red-500" />:<FaRegHeart  className="text-foreground" />}
        </div>
      </div>

      {/* Right side - Profile Details */}
      <div className="px-2 md:px-6 md:w-[65%] w-full text-center md:text-left flex flex-col justify-center">
        {/* Name and Status */}
        <h1 className={`text-3xl md:text-5xl font-bold ${playfair.className}`}>{name}</h1>
        <div className="flex justify-center md:justify-start items-center space-x-2 mt-2">
          <Badge variant="secondary" className="bg-yellow-500 text-white px-2 py-1">
            100 Likes
          </Badge>
          <Badge variant="secondary" className="bg-teal-500 text-white px-2 py-1">
             2 Connections
          </Badge>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        <Card className="flex flex-col items-center justify-center p-4 space-y-2">
            <span className="text-2xl">🏙️</span>
            <CardTitle className="text-sm font-light">CITY:</CardTitle>
            <p className="text-brown-800 font-bold ">{city}</p>
          </Card>

          <Card className="flex flex-col items-center justify-center p-4 space-y-2">
            <span className="text-2xl">👥</span>
            <CardTitle className="text-sm font-light">DOB:</CardTitle>
            <p className="text-brown-800 font-bold">{dob}</p>
          </Card>

          <Card className="flex flex-col items-center justify-center p-4 space-y-2">
            <span className="text-2xl">📏</span>
            <CardTitle className="text-sm font-light">HEIGHT:</CardTitle>
            <p className="text-brown-800 font-bold">{`${height} cm`}</p>
          </Card>

          <Card className="flex flex-col items-center justify-center p-4 space-y-2">
            <span className="text-2xl">💼</span>
            <CardTitle className="text-sm font-light">JOB:</CardTitle>
            <p className="text-brown-800 font-bold">{jobType}</p>
          </Card>

        </div>
      </div>
    </div>
  );
}
