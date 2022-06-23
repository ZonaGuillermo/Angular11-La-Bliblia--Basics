import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() sendArrTask: EventEmitter<any> = new EventEmitter();

  taskData: any = {};
  arrTasks: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.arrTasks.push(this.taskData);
    this.sendArrTask.emit(this.arrTasks);
    this.taskData = {};
  }

}
