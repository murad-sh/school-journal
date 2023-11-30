import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().trim().min(1, 'This field is required'),
  password: z.string().trim().min(1, 'This field is required'),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
