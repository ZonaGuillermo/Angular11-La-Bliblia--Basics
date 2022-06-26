export class ProductSelected {
	name: string;
	amount: number;
	price: number;
	subtotal: number;

	constructor(name: string, price: number, amount: number = 1) {
		this.name = name;
		this.price = price;
		this.amount = amount;
		this.subtotal = this.amount * this.price;
	}

	amountUp(): void {
		this.amount++;
		this.calcSubtotal();
	}
	
	amountDown(): void {
		if (this.amount !== 0) {
			this.amount--;
			this.calcSubtotal();
		}
	}
	
	calcSubtotal() {
		this.subtotal = this.amount * this.price;
	}
}