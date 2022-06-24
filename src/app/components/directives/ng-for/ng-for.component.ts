import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  arrPeople: any[];

  constructor() { 
    this.arrPeople = 
      [
        { name: 'Jose', surname: 'Gomez', age: 23 },
        { name: 'Andrés', surname: 'Gomez', age: 42 },
        { name: 'Pedro', surname: 'Gomez', age: 17 },
        { name: 'Rafael', surname: 'Gomez', age: 66 },
        { name: 'Gustavo', surname: 'Gomez', age: 54 },
        { name: 'Gregorio', surname: 'Gomez', age: 39 },
        { name: 'Martín', surname: 'Gomez', age: 42 },
        { name: 'Luís', surname: 'Gomez', age: 22 }
      ]
  }

  ngOnInit(): void {
  }

}
