import React from 'react';
import { Button } from '../ui/button';
import HeroImage from '../../app/assets/hero-image.avif'
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({subsets:["latin"]})

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center pt-16 " 
      style={{ backgroundImage: `url(${HeroImage.src})`,}}>
      <div className="absolute  inset-0 bg-black opacity-30"></div> {/* Overlay for better text visibility */}
      <div className="px-6 z-10 relative flex items-center justify-start h-full text-left text-accent opacity-70">
        <div className='md:w-8/12 w-full'>
          <h1 className={`mb-4 leading-normal text-3xl md:text-5xl lg:text-6xl font-medium  ${playfairDisplay.className}`}>Where Every <i>Match</i> is <br/> Made with Care and <br/>Tradition!</h1>
          <Button 
            variant={'secondary'}
            className='hover:translate-x-3 transition-all  duration-500'
            // className="mt-6 px-6 py-3 bg-gray-200 text-black rounded-lg shadow-lg hover:bg-gray-300 transition"
            >
            Marry now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
