import React from 'react'
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import WhoLikedYouContent from './who-liked-you'
import { LikeType } from '@/utils/enums/likeType-enum'
import WhomYouLiked from './whom-you-liked'
const LikesTabs = () => {
  
  return (
    <Tabs 
        className='w-full self-center flex flex-col my-8 '
        defaultValue={LikeType.WhoLikedYou}>
        <TabsList 
            className='grid grid-cols-2 gap-8 max-w-4xl w-full  mx-auto bg-background h-12  px-6'>
            <TabsTrigger value={LikeType.WhoLikedYou}>Who liked You</TabsTrigger>
            <TabsTrigger value={LikeType.WhomYouLiked}>Whom you liked</TabsTrigger>
        </TabsList>
        <TabsContent 
            className='min-h-96'
          value={LikeType.WhoLikedYou}>
            <WhoLikedYouContent/>
        </TabsContent>
        <TabsContent
         className='min-h-96' 
         value={LikeType.WhomYouLiked}>
           <WhomYouLiked/>

        </TabsContent>
    </Tabs>
  )
}

export default LikesTabs
