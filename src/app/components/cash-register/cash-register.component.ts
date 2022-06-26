import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductSelected } from 'src/app/models/productSelected.model';

@Component({
  selector: 'app-cash-register',
  templateUrl: './cash-register.component.html',
  styleUrls: ['./cash-register.component.css']
})
export class CashRegisterComponent implements OnInit {

  arrFood: Product[] =
    [
      new Product('photoFood1', 'Food1', 10),
      new Product('photoFood2', 'Food2', 20),
      new Product('photoFood3', 'Food3', 30),
      new Product('photoFood4', 'Food4', 40),
      new Product('photoFood5', 'Food5', 50),
      new Product('photoFood6', 'Food6', 60)
    ];

  arrDrink: Product[] =
    [
      new Product('photoDrink1', 'Drink1', 2),
      new Product('photoDrink2', 'Drink2', 4),
      new Product('photoDrink3', 'Drink3', 6),
      new Product('photoDrink4', 'Drink4', 8),
      new Product('photoDrink5', 'Drink5', 10),
      new Product('photoDrink6', 'Drink6', 12)
    ];
  
  arrProductsSelected: ProductSelected[] = [];
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onReceiveProduct(productReceived: Product): void {
    // ¿El producto existe en arrProductsSelected?
    const indexProductExist: number = this.arrProductsSelected.findIndex((product) => {
      return product.name === productReceived.name;
    });
    
    if (indexProductExist !== -1) {
      // SI -> ++ en amount de ese productSelected
      this.arrProductsSelected[indexProductExist].amountUp();
    } else {
      // NO -> Añadir a arrProductsSelected
      const productSelected: ProductSelected =
        new ProductSelected(productReceived.name, productReceived.price);
      
      this.arrProductsSelected.push(productSelected);
    }
    
    this.calcTotal();
  }

  onReceiveArrProductsTicket(event: ProductSelected[]): void {
    // se filta event que contiene arrProductsTicket para eliminar 
    // productos con amount = 0
    this.arrProductsSelected = event.filter((product) => {
      return product.amount !== 0;
    });
    this.calcTotal();
  }

  calcTotal() {
    const arrSubtotalProductsSelected = this.arrProductsSelected.map((product) => {
      return product.subtotal;
    });

    this.total = arrSubtotalProductsSelected.reduce((acc, current) => {
      return acc + current;
    });
  }
}
