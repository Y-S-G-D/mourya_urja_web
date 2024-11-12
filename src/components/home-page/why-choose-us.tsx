import React from 'react'
import Embracing from '@/app/assets/embracing.png'
import HeartRing from '@/app/assets/heart-ring.png'
import UnitingHearts from '@/app/assets/uniting-hearts.png'
import Image from 'next/image'

type chooseUs = {
    title:string,
    desc:string,
    image:string
}

const WhyChooseUs = () => {

  const chooseUsContent : chooseUs[] = [
    {
      title:"Discover Your",
      desc:"With our user-friendly interface and intuitive features, finding your soulmate has never been easier",
      image:`${HeartRing.src}`
    },
    {
      title:"Uniting Hearts",
      desc:"Maurya Urya Matrimonial is more than just a matchmaking platform - it's a community of like-minded individuals who share a deep",
      image:`${UnitingHearts.src}`
    },
    {
      title:"Embracing",
      desc:"Maurya Urya Matrimonial is more than just a matchmaking platform - it's a community of like-minded individuals who share a deep",
      image:`${Embracing.src}`
    },

    

  ]

  return (
    <section className='bg-accent w-full h-max px-8 pt-20'>
      <div className='max-w-7xl mx-auto flex flex-col justify-center  items-center'>
        <h3 className='text-sm mb-4'>Unveiling the Path to Happily Ever After</h3>
        <h1 className='text-4xl md:text-6xl font-bold mb-6'>Why Choose Us?</h1>
        <p className='text-center md:w-1/2 my-4 text-base text-gray-600'>At Maurya Urya Matrimonial, we are dedicated to creating a safe
        and inclusive environment where Maurya singles can connect</p>
        <div className='grid auto-rows-auto sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12'>
           {
             chooseUsContent.map((data:chooseUs,index:number) => {
              return (
                <div 
                  className='flex flex-col items-center justify-center'
                  key={index}>
                  <div className='bg-white rounded-full p-4 border border-border'>
                    <Image 
                    alt='icon-image' 
                    src={data.image}
                    width={80}
                    height={80}
                    />
                  </div>
                  <h1 className='text-2xl font-bold my-4'>{data.title}</h1>
                  <p className='text-base text-center text-gray-600'>{data.desc}</p>
                </div>
              )
             } )
           }

        </div>
      </div>
      
    </section>
  )
}

export default WhyChooseUs
