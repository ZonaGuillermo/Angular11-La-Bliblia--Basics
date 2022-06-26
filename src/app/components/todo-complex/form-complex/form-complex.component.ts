import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-form-complex',
  templateUrl: './form-complex.component.html',
  styleUrls: ['./form-complex.component.css']
})
export class FormComplexComponent implements OnInit {

  @Output() sendTask: EventEmitter<Task> = new EventEmitter();

  task: Task = new Task();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.sendTask.emit(this.task);
    this.task = new Task();
  }

}
