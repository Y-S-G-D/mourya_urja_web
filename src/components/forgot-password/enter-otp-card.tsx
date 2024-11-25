'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'
import { TbPasswordMobilePhone } from "react-icons/tb";
import { ForgotStateEnum } from '@/utils/enums/forgot-state-enum';
import { useForgotStateStore } from '@/stores/forgot-password-store';


const EnterOTPCard = () => {
  const { handleState } = useForgotStateStore()
  return (
    <div className='max-w-2xl items-center justify-center flex flex-col w-full bg-background shadow-md rounded-lg md:h-[80vh] h-[60vh]'>
        <div className='bg-accent p-4 rounded-full'>
           <TbPasswordMobilePhone size={70} className='text-sidebar-primary'/>
        </div>
        <h1 className='text-2xl font-semibold my-2'>OTP Verification</h1>
        <p className='md:w-1/2  w-[80%] text-center text-sm text-gray-600 mb-4'>Please enter the OTP sent to your registered mail.</p>

        {/* OTP Field */}
        <div className='md:w-1/2  w-[80%] my-2'>
          <Label>Enter OTP</Label>
          <div className='flex space-x-4'>
            {Array.from({length: 6}, (_, i) => ( <Input key={i} className='text-center' placeholder='0'/>))}
          </div>
        </div>
        <Button 
          onClick={() => handleState(ForgotStateEnum.SetPassword)}
          className='my-4 w-24'>Verify</Button>

        <div className='flex items-center'>
          <p className='text-sm text-gray-600'>Didn&apos;t receive the OTP?</p>
          <Button variant={'ghost'}>Resend OTP</Button>
        </div>
      </div>  
  )
}

export default EnterOTPCard
