import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-crono',
  templateUrl: './crono.component.html',
  styleUrls: ['./crono.component.css']
})
export class CronoComponent implements OnInit {

  initialValue: number = 9;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
      const interval = setInterval(() => { 
        if (this.initialValue > 0) {
          this.initialValue--;
        } else {
          clearInterval(interval);
        }
      },
        1000);
  }

}
