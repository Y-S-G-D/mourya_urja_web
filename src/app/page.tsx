import HeroSection from '@/components/home-page/hero-section'
import Navbar from '@/components/home-page/navbar'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <div className='h-screen'></div>
    </div>
  )
}

export default Homepage
