import { z } from 'zod';
import { zId, zWriteable } from './shared';

export const zUserPayload = z.object({
  username: z.string().nullable(),
  password: z.string().nullable(),
  googleId: z.string().nullable(),
  twitterId: z.string().nullable(),
  email: z.string().email(),
  fullName: z.string().nullable(),
  profilePicture: z.string().url().nullable(),
});
export type UserPayload = z.infer<typeof zUserPayload>;

export const zUser = z
  .object({
    userId: zId,
  })
  .merge(zUserPayload)
  .merge(zWriteable);
export type User = z.infer<typeof zUser>;
