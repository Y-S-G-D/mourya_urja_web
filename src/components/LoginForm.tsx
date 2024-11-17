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

const LoginForm = () => {

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { 
        username: "",
        password: ""
    }
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
     console.log(values)
  }

  return (
    <div className='bg-background px-6 py-4 rounded-md'>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <FormField 
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor='username'>Username</FormLabel>
                            <FormControl>
                            <Input {...field} id='username' placeholder="Enter your username" type='text' />
                            </FormControl>
                            <FormMessage>{form.formState.errors.username?.message}</FormMessage>
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
                <Button type="submit" className='w-28' onClick={form.handleSubmit(onSubmit)}>Login</Button>
            </form>
        </Form>
      
    </div>
  )
}

export default LoginForm
