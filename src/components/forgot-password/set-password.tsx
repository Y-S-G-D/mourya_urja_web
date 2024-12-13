'use client';
import React from 'react';
import { PiPasswordFill } from "react-icons/pi";
import { Button } from '../ui/button';
import { Form, FormField, FormItem, FormControl, FormLabel , FormMessage} from '../ui/form';
import { useForm, FieldValues } from 'react-hook-form';
import { Input } from '../ui/input';
import { useForgotPasswordStore } from '@/stores/forgot-password-store';
import CircularLoader from '@/components/skeleton-loaders/circular-loader';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Dialog } from '@/components/ui/dialog'
import SuccessDialog from '@/components/dialogs/success-dialog'
import ErrorDialog from '../dialogs/error-dialog';


const passwordSchema = z.object({
  newPassword: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters long"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], // Set the error on the confirmPassword field
});

const SetPasswordCard = ({token}:{token:string}) => {

  const { isProcessing, changePassword ,showSuccess,showErr, successMsg,errMsg ,handleDialog} = useForgotPasswordStore();
  
  const form = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

 

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    changePassword(data.newPassword,token);
  };

  return (
    <div className='max-w-2xl items-center justify-center flex flex-col w-full bg-background shadow-md rounded-lg md:h-[80vh] h-[60vh]'>
      <div className='bg-accent p-4 rounded-full'>
        <PiPasswordFill size={70} className='text-sidebar-primary' />
      </div>
      <h1 className='text-2xl font-semibold my-2'>Change Password</h1>

      <div className='md:w-1/2 w-[80%] my-4'>
        <Form {...form}>
          <form className="flex flex-col space-y-8 items-center" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter new password" {...field} />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.newPassword?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Confirm new password" {...field} />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.confirmPassword?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button 
              type="submit"
              className={`mt-8 ${isProcessing ? 'px-6' : 'w-24'}`} >
              {isProcessing ? <><CircularLoader /> Processing...</> : 'Save'}
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
      </div>
    </div>
  );
};

export default SetPasswordCard;