import { z } from "zod";

export const loginSchema = z.object({
  phoneNumber: z
    .string()
    .min(9, "Phone number required")
    .max(10, "Phone number must be 10 digits")
    .regex(/(^0?\d{9}$)/, "Phone number is invalid: eg 024xxxxxxx"),
  password: z.string().min(1, "Password is required"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

export const createPasswordSchema = z.object({
  password: z
    .string()
    .min(6, "Must be at least 8 characters in length")
    .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp(".*\\d.*"), "One number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "One special character"
    ),
  confirmpassword: z
    .string()
    .min(6, "Must be at least 8 characters in length")
    .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp(".*\\d.*"), "One number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "One special character"
    ),
});

export type CreatePasswordSchemaType = z.infer<typeof createPasswordSchema>;

export const forgotPasswordSchema = z.object({
  phoneNumber: z
    .string()
    .min(9, "Phone number required")
    .max(10, "Phone number must be 10 digits")
    .regex(/(^0?\d{9}$)/, "Phone number is invalid: eg 024xxxxxxx"),
});

export type forgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;
