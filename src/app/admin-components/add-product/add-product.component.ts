import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:Product

  constructor(private cartService:CartService) {
    this.product= new Product()
   }

  ngOnInit(): void {
  }

  addProduct(){
    this.cartService.products.push(this.product)
    alert("Product Added"+JSON.stringify(this.product))
    this.product= new Product()

  }

}
