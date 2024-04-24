import { z } from 'zod';

export const zId = z.string().uuid();
export type Id = z.infer<typeof zId>;

export const zWriteable = z.object({
  createdAt: z.string().datetime().nullable(),
  modifiedAt: z.string().datetime().nullable(),
});
export type Writeable = z.infer<typeof zWriteable>;
