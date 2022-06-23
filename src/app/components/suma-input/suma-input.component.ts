import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma-input',
  templateUrl: './suma-input.component.html',
  styleUrls: ['./suma-input.component.css']
})
export class SumaInputComponent implements OnInit {

  @Input() num1: number;
  @Input() num2: number;
  result: number;

  constructor() { 
    this.num1 = 78;
    this.num2 = 2;
    this.result = 0;
  }

  ngOnInit(): void {
  }

  onClick(n1: number, n2: number): void {
    this.result = this.num1 + this.num2;
  }

}
