import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crono-output',
  templateUrl: './crono-output.component.html',
  styleUrls: ['./crono-output.component.css']
})
export class CronoOutputComponent implements OnInit {

  @Input() initialValue: number = 9;

  counter: number = 10;

  @Output() message: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.counter = this.initialValue;
  }

  onClick(): void {
      const interval = setInterval(() => { 
        if (this.initialValue > 0) {
          this.initialValue--;
        } else {
          clearInterval(interval);
          this.message.emit('Cuenta regresiva terminada. Reiniciando a ' + this.counter);
          this.initialValue = this.counter;
        }
      },
        1000);
  }

}