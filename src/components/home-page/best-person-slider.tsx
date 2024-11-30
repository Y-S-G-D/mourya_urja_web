'use client'

// import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// import Person from '@/app/assets/person.jpeg';
// import Women from '@/app/assets/women.jpeg';
import UserBasicInfo from '../user-basic-info';
import { connectionData } from '@/utils/connection-data';

export default function BestPersonSlider() {
  return (
      <div  className='max-w-6xl w-full'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            // centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper !pb-12"
          >
            {connectionData.map((data, index) => (
              <SwiperSlide key={index} className="!w-[300px] !h-auto">
                <div className="bg-white  text-foreground rounded-lg shadow-lg p-4 overflow-hidden">
                  <UserBasicInfo />
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-darkcolor mb-2">{project.title}</h3>
                    <p className="text-sm text-onSurface">{project.description}</p>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
  );
}