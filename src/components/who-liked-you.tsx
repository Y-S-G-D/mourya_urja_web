'use client';
import React, { useCallback, useEffect } from 'react'
import ProfileCard from './profile-card'
import { LikeType } from '@/utils/enums/likeType-enum'

import { useFavouriteStore } from '@/stores/faviroute-store';

const WhoLikedYouContent = () => {

  const {getFavourites,isProcessing,favourites} = useFavouriteStore()

  const fetchFavourites = useCallback( async () => {
    getFavourites(LikeType.WhoLikedYou)
  }, [getFavourites])

  useEffect(() => {
    fetchFavourites()
  },[fetchFavourites])

  if(isProcessing){
    return <div>Loading...</div>
  }

  if(favourites.length === 0){
    return <div
      className='text-center text-lg'
    >No one has liked you yet</div>
  }

  return (
    <div className='grid auto-rows-auto sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 my-6'>
        {
            Array.from({length: favourites.length
            }).map((_, index) => (
                <ProfileCard key={index} favourite={favourites[index]} likeType={LikeType.WhoLikedYou} />
            ))
        }
    </div>
  )
}

export default WhoLikedYouContent
