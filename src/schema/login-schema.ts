'use client'

import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email({message: 'Please enter your valid email'}),
    password: z.string().min(6, {message:"Password must be at least 6 characters"}).max(100)
})