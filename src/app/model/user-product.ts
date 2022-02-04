import { Product } from "./product";

export class UserProduct {
    product: Product 
    quantity: number
    constructor(){
        this.product=new Product()
        this.quantity=0
    }
}

