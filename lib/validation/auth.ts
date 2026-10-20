import { z } from 'zod';

export const signUpSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .max(254, "Email must not exceed 254 characters.")
    .pipe(z.email("Please enter a valid email address.")),
    
  displayName: z
    .string()
    .trim()
    .min(2, "Display name must be at least 2 characters.")
    .max(50, "Display name must not exceed 50 characters."),
    
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(72, "Password must not exceed 72 characters.")
    .regex(
       /^[\x20-\x7E]*[\x21-\x7E][\x20-\x7E]*$/,
        "Password can only contain English letters, numbers, and standard symbols."
    ),
});

export type SignUpInput = z.infer<typeof signUpSchema>;