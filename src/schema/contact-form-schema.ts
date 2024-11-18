import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .nonempty({ message: "Name is required" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .nonempty({ message: "Email is required" }),
  subject: z
    .string()
    .nonempty({ message: "Subject is required" }),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "Please enter a valid phone number" })
    .nonempty({ message: "Phone Number is required" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .nonempty({ message: "Message is required" }),
});

export default contactFormSchema;
