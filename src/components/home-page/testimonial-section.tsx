"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from "framer-motion";
import TestimonialCard from "./testimonial-card";

const testimonials = [
  {
    name: "Rahul & Priya",
    message: "Thanks to Maurya Urja Matrimony, we found our soulmate. The platform's values and tradition-focused approach made our journey special.",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=800&auto=format&fit=crop&q=60",
    date: "March 2024",
    location: "Mumbai",
    age: "28 & 26",
    community: "Maurya Kshatriya",
    occupation: "Software Engineer & Doctor"
  },
  {
    name: "Amit & Sneha",
    message: "Our families connected instantly through this platform. The detailed profiles and community verification helped us make the right choice.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60",
    date: "February 2024",
    location: "Delhi",
    age: "29 & 27",
    community: "Maurya Vaishya",
    occupation: "Business Owner & CA"
  },
  {
    name: "Vikram & Neha",
    message: "The platform's focus on Maurya community values made our search meaningful. We're grateful for this perfect match!",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop&q=60",
    date: "January 2024",
    location: "Bangalore",
    age: "31 & 28",
    community: "Maurya Rajput",
    occupation: "Army Officer & Teacher"
  },
  {
    name: "Aditya & Riya",
    message: "Found our perfect match within our community. The cultural compatibility made our bond stronger from day one.",
    image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=800&auto=format&fit=crop&q=60",
    date: "December 2023",
    location: "Pune",
    age: "27 & 25",
    community: "Maurya Kshatriya",
    occupation: "Architect & Designer"
  },
];

export default function TestimonialSection() {

  const [emblaRef] = useEmblaCarousel({
    loop: true,
    // align: 'center',

  });

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
  <section className="py-24 px-4  overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
    {/* <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" /> */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative"
      >
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="text-primary w-8 h-8" />
            <h2 className="font-playfair text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Our Success Stories
            </h2>
            <Sparkles className="text-primary w-8 h-8" />
          </motion.div>
          <motion.p 
            className="font-lora text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Discover how we&apos;ve helped countless couples find their perfect match within the Maurya community
          </motion.p>
        </div>

        <div className="px-4 md:px-12" ref={emblaRef}>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent >
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 transition-all duration-300"
                >
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="hidden md:flex -left-6 bg-primary/10 hover:bg-primary/20 border-primary/20" />
            <CarouselNext className="hidden md:flex -right-6 bg-primary/10 hover:bg-primary/20 border-primary/20" /> */}
          </Carousel>
        </div>
      </motion.div>
    </section>
  );
}