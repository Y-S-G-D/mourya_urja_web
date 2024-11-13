import Navbar from '@/components/home-page/navbar'
import LikesTabs from '@/components/likes-tabs'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import React from 'react'

const LikesPage = () => {
  return (
    <div>
      <Navbar bgColor={'bg-primary'}/>
      <section className='bg-accent max-w-7xl w-full mx-auto pt-24 md:px-8 px-4 flex flex-col justify-center items-center'>
        <h1 className='text-6xl font-bold text-primary mb-4'>Likes</h1>
        <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Likes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        <LikesTabs/>



      </section>
    </div>
  )
}

export default LikesPage
