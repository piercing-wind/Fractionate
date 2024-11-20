import * as z from 'zod';

export const RegisterSchema = z.object({
  fname: z.string().min(2, "First Name must be at least 2 characters."),
  lname: z.string().min(2, "Last Name must be at least 2 characters."),
  email: z.string().email("Email must be valid."),
  phone: z.string().min(10, "Phone Number must be at least 10 characters."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters."),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
});

export interface FormData extends z.infer<typeof RegisterSchema> {}

export const LoginSchema = z.object({
   email: z.string().email(),
   password: z.string().min(1, 'Password is required'),
});