import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks.modal';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
