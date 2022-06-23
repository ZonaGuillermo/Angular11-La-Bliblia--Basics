import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result: string = '';
  operationFinish = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any): void {
    if (!this.operationFinish) {
      this.result += event.target.innerText;
    } else {
      this.operationFinish = false;
      this.result = event.target.innerText;
    }
  }

  calculate(): void {
    this.result = eval(this.result);
    this.operationFinish = true;
  }

}
