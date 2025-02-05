import z from "zod";

export const emailSchema = z.string().email();

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
  .min(1, "Company name cannot be empty");
