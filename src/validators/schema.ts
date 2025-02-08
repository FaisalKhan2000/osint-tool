import { z } from "zod";

export const emailSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(5, "Email must be at least 5 characters long")
    .max(50, "Email must be at most 50 characters long")
    .toLowerCase()
    .trim(),
});

export const usernameSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long")
    .regex(
      /^[a-zA-Z][a-zA-Z0-9_-]*$/, // Username must start with a letter
      "Username must start with a letter and can only contain letters, numbers, underscores, and hyphens"
    )
    .trim(),
});

export const companySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Company name must be at least 2 characters long")
    .max(100, "Company name must be at most 100 characters long")
    .regex(
      /^[a-zA-Z0-9\s\-\&\.]+$/,
      "Company name can only contain letters, numbers, spaces, hyphens, ampersands, and periods"
    ),
  website: z
    .string()
    .url("Invalid website URL")
    .optional(),
  description: z
    .string()
    .max(500, "Description must be at most 500 characters")
    .optional(),
});

// Type inference
export type Email = z.infer<typeof emailSchema>;
export type Username = z.infer<typeof usernameSchema>;
export type Company = z.infer<typeof companySchema>;