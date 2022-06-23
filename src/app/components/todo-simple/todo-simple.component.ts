import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-simple',
  templateUrl: './todo-simple.component.html',
  styleUrls: ['./todo-simple.component.css']
})
export class TodoSimpleComponent implements OnInit {

  arrTasks: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  onReceiveArrTask(event: any) {
    this.arrTasks = event;
  }

}
