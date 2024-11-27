import { z } from "zod";

export const userPersonalInfoSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last Name is required"),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Gender is required" }),
  }),
  dob: z.string().min(1, "Date of Birth is required"),
  bloodGroup: z.string().min(1, "Blood Group is required"),
  height: z.string(),
  weight: z.string().optional(),
  complexion: z.string().optional(),
  hobbies: z.string().optional(),
  aboutMe: z.string().optional(),
  profileImages: z.array(z.string().url("Profile images must be valid URLs")).optional(),
});