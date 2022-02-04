import { TotalAmount } from "./total-amount";
import { UserProduct } from "./user-product";

export class User {
    
    email:string
    password:string
    cart:UserProduct[]
    totalAmount:TotalAmount

    constructor(){
        this.email=""
        this.password=""
        this.cart=[]
        this.totalAmount= new TotalAmount()
    }

}
