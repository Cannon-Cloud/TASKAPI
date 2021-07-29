import { Injectable } from '@nestjs/common';
import { Task } from './tasks.modal';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
