'use client'
import React from 'react'
import { useForm } from "react-hook-form"
import { loginSchema } from "@/schema/login-schema"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAuthStore } from '@/stores/auth-store'
import {useLoginTypeStore } from '@/stores/login-type-store'
import CircularLoader from './skeleton-loaders/circular-loader'
import { Dialog } from "@/components/ui/dialog"
import ErrorDialog from './dialogs/error-dialog'

const LoginForm: React.FC = () => {

  const {login , isLoading, showError, simulateError }  = useAuthStore()
  const { selectedLoginType, } = useLoginTypeStore()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { 
        email: "",
        password: "",
    }
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    const type = selectedLoginType.toLowerCase()
    login(values.email, values.password,type)
    // form.reset()  // Clear the form values after successful submission.
  }

  return (
    <div className='bg-background px-6 py-4 rounded-md'>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <FormField 
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <FormControl>
                            <Input {...field} id='email' placeholder="Enter your Email" type='text' />
                            </FormControl>
                            <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <FormControl>
                            <Input {...field} id='password' placeholder="Enter your password" type='password' />
                            </FormControl>
                            <FormMessage>{form.formState.errors.password?.message}</FormMessage>
                        </FormItem>
                    )}
                />
              <Button 
                type="submit" 
                className={`${isLoading ? 'px-4':'w-28'}`} 
                onClick={form.handleSubmit(onSubmit)}>
                  {isLoading ? <>
                  <CircularLoader/>
                    <span>Processing...</span>
                  </> : 'Login'}
              </Button>
              <Dialog open={showError} onOpenChange={simulateError}>
            <ErrorDialog
              title="Log In Failed"
              message="We couldn't process your request. Please check your connection and try again."
              onRetry={()=>{ simulateError(false)}}
              onCancel={()=>{ simulateError(false)}}
              retryButtonText="Try Again"
              cancelButtonText="Close"
            />
          </Dialog>
            </form>
        </Form>
      
    </div>
  )
}

export default LoginForm
