import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  num1: number;
  num2: number;
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
