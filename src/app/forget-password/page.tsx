'use client'
import SendMailCard from '@/components/forgot-password/send-mail-card'
import React from 'react'
// import { useForgotStateStore } from '@/stores/forgot-password-store'
// import { ForgotStateEnum } from '@/utils/enums/forgot-state-enum'
// import EnterOTPCard from '@/components/forgot-password/enter-otp-card'
// import SetPasswordCard from '@/components/forgot-password/set-password'

const ForgetPassword = () => {
   
   // const { currentState } = useForgotStateStore()
   
   
  
  //  const renderComponent = () => {
  //     if(currentState===ForgotStateEnum.EnterOTP){
  //       return <EnterOTPCard/>
  //     }
  //     if(currentState===ForgotStateEnum.SetPassword){
  //       return <SetPasswordCard/>
  //     }
  //     else {
  //       return <SendMailCard/>
  //     }
  //  }
  return (
    <section className='flex  md:flex-row flex-col items-center md:bg-accent bg-secondary justify-between  py-4 h-screen'>
      <div className='md:h-[90vh] h-24 md:w-36 w-full bg-gradient-to-l from-sidebar-primary to-primary rounded-tr-lg skew-y-12  rounded-br-lg '/>
       <SendMailCard/>
      <div className='md:h-[90vh] h-24 md:w-36 w-full bg-gradient-to-r from-sidebar-primary to-primary rounded-tl-lg -skew-y-12 rounded-bl-lg '/>
    </section>
  )
}

export default ForgetPassword
