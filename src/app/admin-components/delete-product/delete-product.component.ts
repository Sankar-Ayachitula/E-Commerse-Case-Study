import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/model/product';
import { AdminLoginService } from 'src/app/services/admin-login.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit,OnChanges {

  products: Product[]

  constructor(private cartService: CartService,private adminService:AdminLoginService) {
    this.products= adminService.products
   }

  ngOnInit(): void {
    this.products=this.adminService.products
  }

  ngOnChanges(changes: SimpleChanges): void {
     // this.products=this.adminService.products
  }



  deleteProduct(product:Product){
    this.products.forEach(element => {
      if(element.id==product.id){
        let key= this.products.indexOf(product)
        this.products.splice(key,1)
      }
    });

  }

  deleteProds(id:number){
    this.adminService.deleteProducts(id).subscribe(
      (data) => {
        console.log(JSON.stringify(data));
        this.products=data

      },
      (error) => {
        console.log("Some thing went wrong")
        console.log(error.error);

      }
    )

  }



}
