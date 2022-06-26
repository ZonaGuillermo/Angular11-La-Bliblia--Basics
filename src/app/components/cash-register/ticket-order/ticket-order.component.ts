import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductSelected } from 'src/app/models/productSelected.model';

@Component({
  selector: 'app-ticket-order',
  templateUrl: './ticket-order.component.html',
  styleUrls: ['./ticket-order.component.css']
})
export class TicketOrderComponent implements OnInit {

  @Input() arrProductsTicket: ProductSelected[] = [];
  @Input() totalTicket: number = 0;
  @Output() sendArrProductsTicket: EventEmitter<ProductSelected[]> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.sendArrProductsTicket.emit(this.arrProductsTicket);
  }
}
