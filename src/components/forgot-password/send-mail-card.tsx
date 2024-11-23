"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'
import { RiLockPasswordFill } from "react-icons/ri";
import { useForgotStateStore } from '@/stores/forgot-password-store';
import { ForgotStateEnum } from '@/utils/enums/forgot-state-enum';

const SendMailCard = () => {
  const { handleState } = useForgotStateStore()
  return (
    <div className='max-w-2xl items-center justify-center flex flex-col w-full bg-background md:mx-0 mx-4 shadow-md rounded-lg md:h-[80vh] h-[60vh]'>
        <div className='bg-accent p-4 rounded-full'>
           <RiLockPasswordFill size={70} className='text-sidebar-primary'/>
        </div>
        <h1 className='text-2xl font-semibold my-2'>Forgot Password</h1>
        <p className='md:w-1/2 w-[80%] text-center text-sm text-gray-600 mb-4'>Enter your email address below and we&apos;ll send you a OTP to reset your password.</p>
        {/* Email Field */}
        <div className='md:w-1/2  w-[80%] my-2'>
          <Label>Email</Label>
          <Input placeholder='Enter your email'/>
        </div>
        <Button 
          onClick={() => handleState(ForgotStateEnum.EnterOTP)}
          className='mt-8 w-24'>Send</Button>
      </div>  )
}

export default SendMailCard
