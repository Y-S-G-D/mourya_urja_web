'use client';
import React, { useCallback, useEffect } from 'react'
import ProfileCard from './profile-card'
import { LikeType } from '@/utils/enums/likeType-enum'
import UserNotFound from "@/components/skeleton-loaders/user-not-found";

import { useFavouriteStore } from '@/stores/faviroute-store';
import FavouriteSkeletonLoader from './skeleton-loaders/favourite-skeleton-loader';

const WhoLikedYouContent = () => {

  const {getFavourites,isProcessing,favourites} = useFavouriteStore()

  const fetchFavourites = useCallback( async () => {
    getFavourites(LikeType.WhoLikedYou)
  }, [getFavourites])

  useEffect(() => {
    fetchFavourites()
  },[fetchFavourites])

  if(isProcessing){
    return <FavouriteSkeletonLoader/>
  }

  if(favourites.length === 0){
    return <UserNotFound title="User Not Found :(" desc="Seems like no one has liked you yet."/>
  }

  return (
    <div className='grid auto-rows-auto sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 my-6 mx-auto max-h-96'>
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
