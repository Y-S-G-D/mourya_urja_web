import { z } from "zod";
// This schema is using on Copntact Us Page for Enquiry //
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .min(1, { message: "Name is required" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email is required" }),
  subject: z
    .string()
    .min(1, { message: "Subject is required" }),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "Phone Number must be exactly 10 digits" })
    .min(1, { message: "Phone Number is required" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .min(1, { message: "Message is required" }),
});

export default contactFormSchema;
