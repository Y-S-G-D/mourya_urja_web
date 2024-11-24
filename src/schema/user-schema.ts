import { z } from "zod";

// Personal Information Schema
export const personalInfoSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  gender: z.enum(["Male", "Female", "Other"]).refine((val) => ["Male", "Female", "Other"].includes(val), {
    message: "Invalid gender",
  }),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
  height: z.number().positive("Height must be a positive number"),
  weight: z.number().positive("Weight must be a positive number"),
  complexion: z.string().min(1, "Complexion is required"),
  hobbies: z.array(z.string()).optional(),
  aboutMe: z.string().optional(),
  profileImages: z.array(z.string().url("Profile images must be valid URLs")).optional(),
});

// Contact Information Schema
export const contactInfoSchema = z.object({
  phoneNumber: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  email: z.string().email("Invalid email address"),
});

// Address Schema
export const addressSchema = z.object({
  address: z.string().min(1, "Address is required"),
  locality: z.string().min(1, "Locality is required"),
  city: z.string().min(1, "City is required"),
  district: z.string().min(1, "District is required"),
  state: z.string().min(1, "State is required"),
  pincode: z.string().regex(/^\d{6}$/, "Pincode must be 6 digits"),
});

// Educational and Professional Information Schema
export const eduAndProfInfoSchema = z.object({
  highestEducation: z.string().min(1, "Highest education is required"),
  otherEductionDetail: z.string().optional(),
  jobType: z.string().min(1, "Job type is required"),
  designation: z.string().optional(),
  workDetail: z.string().optional(),
  income: z.number().nonnegative("Income must be a non-negative number"),
});

// Culture and Religious Information Schema
export const cultureAndReligiousInfoSchema = z.object({
  religion: z.string().min(1, "Religion is required"),
  caste: z.string().min(1, "Caste is required"),
  subCaste: z.string().optional(),
  gotra: z.string().optional(),
  raasi: z.string().optional(),
});

// Family Information Schema
export const familyInfoSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  fatherOccupation: z.string().optional(),
  motherName: z.string().min(1, "Mother's name is required"),
  motherOccupation: z.string().optional(),
  noOfSiblings: z.number().nonnegative("Number of siblings must be non-negative"),
  noOfBrothers: z.number().nonnegative("Number of brothers must be non-negative"),
  noOfSisters: z.number().nonnegative("Number of sisters must be non-negative"),
  familyType: z.string().min(1, "Family type is required"),
});

// User Schema
export const userSchema = z.object({
  createdBy: z.string().min(1, "Created by is required"),

  personalInfo: personalInfoSchema,

  contactInfo: contactInfoSchema,

  residentialAddr: addressSchema,
  permanentAddr: addressSchema,

  eduAndProfInfo: eduAndProfInfoSchema,

  cultureAndReligiousInfo: cultureAndReligiousInfoSchema,

  familyInfo: familyInfoSchema,

  spouseExpctation: z.string().optional(),

  isApproved: z.boolean(),

  tags: z.array(z.string()).optional(),
});
