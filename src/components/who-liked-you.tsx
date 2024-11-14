import React from 'react'
import ProfileCard from './profile-card'
import { LikeType } from '@/utils/enums/liketype-enum'

const WhoLikedYouContent = () => {
  return (
    <div className='grid auto-rows-auto sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 my-6'>
        {
            Array.from({length: 12}).map((_, index) => (
                <ProfileCard key={index} likeType={LikeType.WhoLikedYou}/>
            ))
        }
    </div>
  )
}

export default WhoLikedYouContent
