import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  showHideParagraph: boolean = true;
  IfElseParagraph: boolean = true;
  IfThenElseParagraph: boolean = true;
  show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.showHideParagraph = !this.showHideParagraph;
  }

  showIfElse(): void {
    this.IfElseParagraph = !this.IfElseParagraph;
  }

  showIfThenElse(): void {
    this.IfThenElseParagraph = !this.IfThenElseParagraph;
  }

  optimalCode(): void {
    this.show = !this.show;
  }

}
