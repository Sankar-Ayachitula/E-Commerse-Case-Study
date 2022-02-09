import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { AdminLoginService } from 'src/app/services/admin-login.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:Product

  constructor(private cartService:CartService,private adminService:AdminLoginService) {
    this.product= new Product()
   }

  ngOnInit(): void {
  }

  addProd(){
    // this.cartService.products.push(this.product)
    // alert("Product Added"+JSON.stringify(this.product))
    console.log(this.product.name+" adad"+ this.product.description+" aa"+this.product.cost)
    this.adminService.addProduct(this.product).subscribe(
      (data) => {
        console.log(JSON.stringify(data));
        this.adminService.products=data
        alert("Product Added")

      },
      (error) => {
        console.log("Some thing went wrong")
        console.log(error.error);

      }
    )

    this.product= new Product()

  }

}
