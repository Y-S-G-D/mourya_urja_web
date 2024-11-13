import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SendHorizonal } from 'lucide-react'
import { Separator } from './ui/separator'
import Image from 'next/image'
import Person from '@/app/assets/person.jpeg'

const CommentsSection = () => {
  return (
    <SheetContent>
      <SheetHeader>
          <SheetTitle className='text-4xl'>Comments</SheetTitle>
          <SheetDescription>
          Feel free to leave your comments below. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
            <Label>Comments</Label>
            <div className='flex my-2'>
                <Input placeholder='Enter your comment here'/>
                <Button 
                    className='rounded-full px-3 ml-4'
                    variant={'secondary'}><SendHorizonal/></Button>
            </div>
            <Separator className='my-4'/>
            <div className='flex gap-4 p-2 bg-accent rounded-lg '>
                <Image src={Person.src} alt="Comment Image" width={30} height={20} className='h-1/2' />
                <div>
                    <h1 className='text-sm font-medium text-primary'>@snehakashyap <span className='text-[10px] font-light text-gray-500'> ~ 10 days ago</span></h1>
                    <p className='text-xs text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nunc nec nisl congue ultricies. </p>
                </div>
                
            </div>


          
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
    </SheetContent>
  )
}

export default CommentsSection
