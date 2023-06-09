import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

//TODO Need to fix, because there are many types repeats
const createTaskCredentialsDto = z.object({
  title: z.string().nonempty(),
  description: z.string(),
  status: z.enum(['FINISHED', 'CANCELED', 'INPROGRESS']),
  type: z.enum(['inbox', 'unplaced']),
  start_date: z
    .string()
    .nullable()
    .transform((str) => (str ? new Date(str) : null)),
});
export class CreateTaskCredentialDto extends createZodDto(
  createTaskCredentialsDto,
) {}

const updateTaskCredentialsDto = z.object({
  title: z.string().nonempty(),
  description: z.string(),
  status: z.enum(['FINISHED', 'CANCELED', 'INPROGRESS']),
  start_date: z
    .string()
    .nullable()
    .transform((str) => (str ? new Date(str) : null)),
  type: z.enum(['inbox', 'unplaced']),
  id: z.number(),
});
export class UpdateTaskCredentialDto extends createZodDto(
  updateTaskCredentialsDto,
) {}

export const updateStatusCredentialsDto = z.object({
  id: z.number(),
  status: z.enum(['FINISHED', 'CANCELED', 'INPROGRESS']),
});
export class UpdateStatusCredentialDto extends createZodDto(
  updateStatusCredentialsDto,
) {}

const taskDtoSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  status: z.enum(['FINISHED', 'CANCELED', 'INPROGRESS']),
  start_date: z.date().nullable(),
  type: z.enum(['inbox', 'unplaced']),
  user_id: z.number(),
});

export class TaskDto extends createZodDto(taskDtoSchema) {}
