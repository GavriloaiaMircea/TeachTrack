import { z } from "zod";

const loginSchema = z.object({
  usernameOrEmail: z.string().min(1, "Email or Username is required").max(255),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = z
  .object({
    email: z.string().email("Invalid email address").max(255),
    username: z.string().min(1, "Username is required").max(255),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const validateLogin = (data) => {
  try {
    loginSchema.parse(data);
    return { success: true, errors: [] };
  } catch (err) {
    return { success: false, errors: err.errors || [] };
  }
};

export const validateRegister = (data) => {
  try {
    registerSchema.parse(data);
    return { success: true, errors: [] };
  } catch (err) {
    return { success: false, errors: err.errors || [] };
  }
};
