import { TaskStatus } from '../tasks.modal';

export class GetTasksFilterDto {
  status?: TaskStatus;
  search?: string;
}
