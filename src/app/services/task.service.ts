import { Injectable } from '@angular/core';
import { Task } from '../Task'
@Injectable()
export class TaskService {

  constructor() { }

  getTasks() {
    const tasks: Task[] = [];

    tasks.push(
      new Task('Chocolate', 10.0,4),
      new Task('Tooth Brush', 15.0,1),
  );
    return tasks;
  }

}
