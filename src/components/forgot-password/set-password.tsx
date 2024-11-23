import React from 'react'
import { PiPasswordFill } from "react-icons/pi";
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const SetPasswordCard = () => {
  return (
    <div className='max-w-2xl items-center justify-center flex flex-col w-full bg-background shadow-md rounded-lg md:h-[80vh] h-[60vh]'>
        <div className='bg-accent p-4 rounded-full'>
           <PiPasswordFill size={70} className='text-sidebar-primary'/>
        </div>
        <h1 className='text-2xl font-semibold my-2'>Change Password</h1>

        {/* <p className='w-1/2 text-center text-sm text-gray-600 mb-4'>Please enter the OTP sent to your registered mail.</p> */}

        {/* Password Fields */}
        <div className='md:w-1/2 w-[80%] my-2'>
          <Label>New Password</Label>
          <Input placeholder='Enter new password'/>
        </div>
        <div className='md:w-1/2  w-[80%] my-2'>
          <Label>Confirm Password</Label>
          <Input placeholder='Confirm new password'/>
        </div>
        <Button 
          className='my-4 w-24'>Save</Button>
        
      </div>  
  )
}

export default SetPasswordCard
