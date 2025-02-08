import z from "zod";

export const emailSchema = z
  .string()
  .email("Invalid email address")
  .min(5, "Email must be at least 5 characters long")
  .max(50, "Email must be at most 50 characters long");

export const usernameSchema = z
  .string()
  .min(3, "Username must be at least 3 characters long")
  .max(20, "Username must be at most 20 characters long")
  .regex(
    /^[a-zA-Z0-9_]+$/,
    "Username can only contain alphanumeric characters and underscores"
  );

export const companySchema = z
  .string()
  .trim()
  .min(1, "Company name cannot be empty")
  .max(100, "Company name must be at most 100 characters long");
