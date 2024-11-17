import Navbar from '@/components/home-page/navbar'
import React from 'react'

const PrivacyPolicy = ({type}:{type:string}) => {
  return (
    <main>
    <Navbar 
     type={type}
     bgColor={"bg-primary"}/>
    <section className='max-w-7xl mx-auto px-8 pt-24 flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>Privacy Policy</h1>
        <div className='py-12  mt-8 bg-secondary rounded-lg shadow-md w-1/2 flex items-center justify-center'>
            <h3 className='text-xl'>Coming Soon...</h3>

        </div>
      
    </section>
    </main>
  )
}

export default PrivacyPolicy
