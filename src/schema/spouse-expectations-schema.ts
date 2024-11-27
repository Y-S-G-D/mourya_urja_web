import { z } from 'zod';

export const spouseExpectationsSchema = z.object({
  spouseExpectations: z.string({ message: 'Spouse expectations is required' })
    .min(10, { message: 'Spouse expectations should be at least 10 characters long' })
    .max(200, { message: 'Spouse expectations should not exceed 200 characters' })
});

