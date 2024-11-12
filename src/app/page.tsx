import BestForYouSection from '@/components/home-page/best-for-you'
import HeroSection from '@/components/home-page/hero-section'
import Navbar from '@/components/home-page/navbar'
import OurSuccessStoriesSection from '@/components/home-page/our-success-stories'
import WhyChooseUs from '@/components/home-page/why-choose-us'
import Footer from '@/components/Footer'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <Navbar bgColor={null} />
      <HeroSection/>
      <WhyChooseUs/>
      <BestForYouSection/>
      <OurSuccessStoriesSection/>
      <Footer/>
    </div>
  )
}

export default Homepage
