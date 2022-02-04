import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  products: Product[]

  constructor(private cartService: CartService) {
    this.products=cartService.products
   }

  ngOnInit(): void {
  }

  deleteProduct(product:Product){
    this.products.forEach(element => {
      if(element.id==product.id){
        let key= this.products.indexOf(product)
        this.products.splice(key,1)
      }
    });

  }



}
