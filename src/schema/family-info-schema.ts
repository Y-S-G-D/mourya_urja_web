import { z } from 'zod';

export const familyInfoSchema = z.object({
    fatherName: z.string().min(3,{message: 'Father name is required'}),
    fatherOccupation: z.string().min(3,{message: 'Father occupation is required'}),
    motherName: z.string().min(3,{message: 'Mother name is required'}),
    motherOccupation: z.string().min(3,{message: 'Mother occupation is required'}),
    familyType: z.enum(["Joint", "Nuclear"]).refine((val) => val !== undefined, 
    { message: 'Family type is required' }),
})  