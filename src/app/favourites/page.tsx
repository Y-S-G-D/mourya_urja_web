
import Navbar from '@/components/home-page/navbar'
import LikesTabs from '@/components/likes-tabs'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import React from 'react'
import Footer from '@/components/Footer'


const LikesPage = () => {

  
  return (
    <div>
      <Navbar bgColor={'bg-primary'}/>
      <section className='bg-accent  w-full mx-auto pt-24 md:px-8 px-4 flex flex-col justify-center items-center'>
        <h1 className='text-6xl font-bold text-primary mb-4'>Favourites</h1>
        <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem >
                <BreadcrumbLink href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator  />
              <BreadcrumbItem>
                <BreadcrumbPage>Favourites</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        <LikesTabs/>
        <Footer/>



      </section>
    
    </div>
  )
}

export default LikesPage
