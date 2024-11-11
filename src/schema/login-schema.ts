'use client'

import { z } from "zod"

export const loginSchema = z.object({
    username: z.string().min(4 ,{message:"Username must be at least 4 characters"}).max(20),
    password: z.string().min(6, {message:"Password must be at least 6 characters"}).max(100)
})