import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-todo-complex',
  templateUrl: './todo-complex.component.html',
  styleUrls: ['./todo-complex.component.css']
})
export class TodoComplexComponent implements OnInit {

  arrTasks: Task[] = [{ title: 'Tarea uno', description: 'Primera tarea', done: false }];

  constructor() { }

  ngOnInit(): void {
  }

  onReceiveTask(event: Task): void {
    this.arrTasks.push(event);
  }

}
