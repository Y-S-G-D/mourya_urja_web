import React from 'react'
import BestForYou from '../../app/assets/best-for-you.jpg'
// import {Button} from '@/components/ui/button'
import { CarouselSpacing } from './best-person-slider'

const BestForYouSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center pt-16 " 
      style={{ backgroundImage: `url(${BestForYou.src})`}}>
      <div className="absolute  inset-0 bg-primary opacity-50"></div> {/* Overlay for better text visibility */}
      <div className=" max-w-7xl mx-auto px-6 z-10 relative flex flex-col items-center justify-center text-accent ">
         <h1 className='text-6xl font-bold '>Best For You</h1>
         <p className='text-base my-4 '>Our handpicked top compatibility for you life partner</p>
         <CarouselSpacing/>
      </div>
    </section>
  )
}

export default BestForYouSection
