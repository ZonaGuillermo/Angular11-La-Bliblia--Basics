import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-list-complex',
  templateUrl: './list-complex.component.html',
  styleUrls: ['./list-complex.component.css']
})
export class ListComplexComponent implements OnInit {

  @Input() tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDone(task: Task): void {
    task.done = !task.done;
  }

  onDelete(index: number): void {
      this.tasks.splice(index, 1);
  }

}
