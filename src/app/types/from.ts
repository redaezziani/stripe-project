import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }),
  password: z.string().min(6).max(30, { message: 'Password must be at least 6 characters long' }),
  send_emails: z.string().optional(),
});

export const SignUpSchema = z.object({
  name: z.string().min(3).max(30, { message: 'Name must be at least 3 characters long' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  password: z.string().min(6).max(30, { message: 'Password must be at least 6 characters long' }),
});

export const ResetPasswordSchema = z.object({
 password : z.string().min(6).max(30, { message: 'Password must be at least 6 characters long' }),
});

export const ChangePasswordSchema = z.object({
  currentPassword: z.string().min(8, 'Password must be at least 8 characters'),
  newPassword: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(8, 'Password must be at least 8 characters'),
})

export type ChangePasswordType = z.infer<typeof ChangePasswordSchema>
export type SignInSchemaType = z.infer<typeof SignInSchema>;
export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
