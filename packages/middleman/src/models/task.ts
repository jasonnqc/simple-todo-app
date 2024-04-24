import { z } from 'zod';
import { zId, zWriteable } from './shared';

export const zTaskPayload = z.object({
  userId: zId,
  taskName: z.string(),
  description: z.string().nullable(),
  dueDate: z.string().datetime().nullable(),
  priority: z.string().nullable(),
  completed: z.boolean().default(false),
});
export type TaskPayload = z.infer<typeof zTaskPayload>;

export const zTask = z
  .object({
    taskId: zId,
  })
  .merge(zTaskPayload)
  .merge(zWriteable);
export type Task = z.infer<typeof zTask>;
