import { z } from 'zod';

const addressSchema = z.object({
    address: z.string().min(1, 'Address is required'),
    locality: z.string().min(1, 'Locality is required'),
    city: z.string().min(1, 'City is required'),
    district: z.string().min(1, 'District is required'),
    state: z.string().min(1, 'State is required'),
    pincode: z.string().min(1, 'Pincode is required').regex(/^\d{6}$/, 'Pincode must be 6 digits'),
  });
  
export const userContactSchema = z.object({
    phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number must be at most 15 digits'),
    email: z.string().email('Invalid email address'),
    residenceAddress: addressSchema,
    permanentAddress: addressSchema,
    copyAddress: z.boolean(),
  });