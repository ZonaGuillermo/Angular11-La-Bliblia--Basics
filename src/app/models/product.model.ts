export class Product {
	image: string;
	name: string;
	price: number;

	constructor(image: string, name: string, price: number) {
		this.image = image;
		this.name = name;
		this.price = price;
	}
}