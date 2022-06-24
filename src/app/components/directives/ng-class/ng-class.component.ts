import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  arrClass: string[] = ['size', 'shape', 'red'];
  selectedColor: string = 'b';

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(event: any): void {
    this.arrClass[2] = 'blue';
  }

  onMouseOut(event: any): void {
    this.arrClass[2] = 'red';
  }
}
