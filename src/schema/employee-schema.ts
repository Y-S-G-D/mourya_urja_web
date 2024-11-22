'use client'

import { z } from 'zod';

export const employeeSchema = z.object({
  firstname: z.string()
    .min(3, { message: "First name is required" })
    .max(50, { message: "First name must be less than 50 characters" }),
  lastname: z.string()
    .min(1, { message: "Last name is required" })
    .max(50, { message: "Last name must be less than 50 characters" }),
  email: z.string()
    .email({ message: "Enter a valid email address" }),
  role: z.string()
    .min(1, { message: "Role is required" }),
  phone: z.string()
    .regex(/^\+?[1-9]\d{1,12}$/, { message: "Enter a valid phone number" }),
  designation: z.string()
    .min(1, { message: "Designation is required" }),
  posting: z.string()
    .min(1, { message: "Posting is required" }),
  access: z.array(z.string()).min(1, { message: "Access is required" }),
  companyName: z.string().min(2,{message:"Please enter company name"})  ,
  post: z.string()
    .min(1, { message: "Post is required" }),
});