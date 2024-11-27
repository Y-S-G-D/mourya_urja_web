import { z } from 'zod';

export const culturalNdReligiousSchema = z.object({
    religion: z.string().min(3,{message: 'Please enter your religion'}),
    caste: z.string().min( 3,{message: 'Please enter your caste'}),
    subCaste: z.string().min(3, {message: 'Please enter your sub caste'}),
    gotra: z.string().min(3,{message: 'Please enter your gotra'}),
    raasi: z.string().optional(),
  })