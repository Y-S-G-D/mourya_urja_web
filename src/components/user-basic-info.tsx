import React from 'react'
import {
    User,
    MapPin,
    Briefcase,
    CheckCircle,
  } from "lucide-react";
import Image from 'next/image'
import { Separator } from './ui/separator';
import { Connection } from '@/utils/connection-data';

const UserBasicInfo = ({data}:{data:Connection}) => {
  return (
    <>
      <Image
                src={data.image}
                alt={data.userName}
                width={200}
                height={200}
                className="w-full h-72 sm:h-max border-4 border-secondary object-cover rounded-xl transform transition duration-500 group-hover:scale-x-105"
              />

              <h2 className="mt-2 flex items-center">
                <User
                  className="mr-2 text-primary group-hover:text-accent transition duration-500"
                  size={14}
                />
                <span className="text-lg font-bold">{data.userName}</span>
                <Separator dir="vertical" className="h-6 w-0.5 mx-2" />
                <span className="ml-2  text-gray-600 group-hover:text-accent transition duration-500">
                  {data.age} yrs
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
                {data.location}
              </p>
              <p className="text-sm text-gray-600 group-hover:text-accent transition duration-500 flex items-center">
                <Briefcase
                  className="mr-2 text-primary group-hover:text-accent transition duration-500"
                  size={14}
                />
                {data.employment}
              </p>
    </>
  )
}

export default UserBasicInfo
