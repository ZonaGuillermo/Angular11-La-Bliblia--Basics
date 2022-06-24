import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  paragraphStyle: any = { color: 'green', fontSize: '1rem' };

  constructor() { }

  ngOnInit(): void {
  }

  colorChange(color: string): void {
    switch (color) {
      case 'y':
        this.paragraphStyle.color = 'yellow';
        break;
    
      case 'r':
        this.paragraphStyle.color = 'red';
        break;
    
      case 'b':
        this.paragraphStyle.color = 'blue';
        break;
    }
  }

  onInput(event: any): void {
    this.paragraphStyle.fontSize = `${event.target.value}px`;
  }

}