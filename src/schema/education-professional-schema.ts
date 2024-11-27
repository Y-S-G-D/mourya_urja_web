import { z } from 'zod';

export const educationalNdProfessionalSchema = z.object({
    highestEducation: z.string().min(3,{message: 'Please enter your highest education'}),
    otherEducation: z.string().min(3,{message: 'Please enter your other educational details'}),
    jobType: z.string().min(3 ,{message: 'Please select your job type'}),
    designation: z.string().min(3,{message: 'Please enter your designation'}),
    workDetails: z.string().min(3,{message: 'Please enter your work details'}),
    income: z.string().min(3,{message: 'Please enter your income'}),
})
