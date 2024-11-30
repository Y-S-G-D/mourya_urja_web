"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, MapPin, Quote, Users, Briefcase } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import CoupleImage from '@/app/assets/matrimonial_login.png'

interface TestimonialProps {
  name: string;
  message: string;
  image: string;
  date: string;
  location: string;
  age: string;
  community: string;
  occupation: string;
}

export default  function TestimonialCard({ 
  name, 
  message, 
  
  date, 
  location, 
  age,
  community,
  occupation,
}: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="h-full relative overflow-hidden group transition-all duration-500 hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <CardContent className="p-4 flex flex-col items-center text-center gap-4 relative">
          <Quote className="absolute top-4 right-4 text-primary/20 w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
          <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-primary/20 transition-all duration-500 group-hover:ring-primary/40">
            <Image
              src={CoupleImage.src}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 160px) 100vw, 160px"
            />
          </div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Heart className="text-pink-700 w-6 h-6 animate-pulse" />
          </motion.div>
          <div className="space-y-1">
            <h3 className="text-2xl font-playfair font-semibold bg-gradient-to-r from-primary to-sidebar-primary bg-clip-text text-transparent">
              {name}
            </h3>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full text-sm">
            <div className="flex items-center gap-2 justify-center">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Users className="w-4 h-4 text-primary" />
              <span>{community}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 justify-center text-sm">
            <Briefcase className="w-4 h-4 text-primary" />
            <span>{occupation}</span>
          </div>
          <div className="bg-primary/5 rounded-lg p-4 mt-2 backdrop-blur-sm">
            <p className="text-muted-foreground font-lora italic leading-relaxed">
              &ldquo;{message}&rdquo;
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            Age at marriage: {age}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}