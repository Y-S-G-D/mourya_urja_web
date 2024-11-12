import React from 'react'
import TestimonialSection from './testimonial'
// import Image from 'next/image'

const OurSuccessStoriesSection = () => {
  return (
    <section className='bg-accent w-full h-max px-8 pt-20'>
      <div className='max-w-7xl mx-auto flex flex-col justify-center  items-center'>
        <h1 className='text-5xl font-bold'>Our Success Stories</h1>
          <p className='md:w-1/2 text-base text-center my-6'>
            Discover the inspiring journeys of our clients and how we helped them achieve their dreams.
          </p>
          <TestimonialSection/>
      </div>
      
    </section>
  )
}

export default OurSuccessStoriesSection
