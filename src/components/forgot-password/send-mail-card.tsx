"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormControl, FormLabel } from "../ui/form";
import { FieldValues, useForm } from "react-hook-form";
import React from 'react'
import { RiLockPasswordFill } from "react-icons/ri";
import {useForgotPasswordStore } from '@/stores/forgot-password-store'
import CircularLoader from '@/components/skeleton-loaders/circular-loader';
import { Dialog } from '@/components/ui/dialog'
import SuccessDialog from '@/components/dialogs/success-dialog'
import ErrorDialog from '../dialogs/error-dialog';

const SendMailCard = () => {
  const { isProcessing,  sendEmail,successMsg , errMsg,showSuccess , showErr ,handleDialog} = useForgotPasswordStore()

  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data)
    sendEmail(data.email)
  }
  // const { handleState } = useForgotStateStore()
  return (
    <div className='max-w-2xl items-center justify-center flex flex-col w-full bg-background md:mx-0 mx-4 shadow-md rounded-lg md:h-[80vh] h-[60vh]'>
        <div className='bg-accent p-4 rounded-full'>
           <RiLockPasswordFill size={70} className='text-sidebar-primary'/>
        </div>
        <h1 className='text-2xl font-semibold my-2'>Forgot Password</h1>
        <p className='md:w-1/2 w-[80%] text-center text-sm text-gray-600 mb-4'>Enter your email address below and we&apos;ll send you a OTP to reset your password.</p>
        {/* Email Field */}
        <div className='md:w-1/2  w-[80%] my-2'>

        <Form {...form}>
          <form className="flex flex-col gap-4  items-center " onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button 
              type="submit"
              className={`mt-8 ${isProcessing?'px-6':'w-24'}`} >{
                isProcessing? <><CircularLoader/> Processing...</> : 'Send'
              }
            </Button>
            {successMsg.length > 0 ?<React.Fragment>
              <Dialog open={showSuccess}  onOpenChange={()=>{
                handleDialog()
                form.reset()
              }}>
                <SuccessDialog message={successMsg}/>
              </Dialog>
            </React.Fragment> :<></>}
            {showErr ?<React.Fragment>
              <Dialog open={showErr}  onOpenChange={()=>{
                handleDialog()
                form.reset()
              }}>
                <ErrorDialog message={errMsg}/>
              </Dialog>
            </React.Fragment> :<></>}

          </form>
        </Form>
{/*           
          <Label>Email</Label>
          <Input placeholder='Enter your email'/> */}
        </div>
        {/* <Button 
          onClick={() => handleState(ForgotStateEnum.EnterOTP)}
          className='mt-8 w-24'>Send</Button> */}
      </div>  )
}

export default SendMailCard
