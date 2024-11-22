import { z } from "zod";

export const siblingSchema = z.object({
    name: z.string().min(3, "Name is required"),
    relation: z.enum(["Brother", "Sister"]).refine((val) => val !== undefined, {
      message: "Relation is required",
    }),
    age: z
      .number({ invalid_type_error: "Age must be a number" })
      .min(0, "Age must be greater than or equal to 0")
      .max(60, "Age must be realistic (less than 60)"),
    ageRelation: z.enum(["Younger", "Elder"]).refine((val) => val !== undefined, {
      message: "Age Relation is required",
    }),
    education: z.string().min(5, "Educational details are required"),
    workDetails: z.string().optional(),
  });
  