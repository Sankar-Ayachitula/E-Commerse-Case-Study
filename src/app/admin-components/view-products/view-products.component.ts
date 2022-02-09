import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { AdminLoginService } from 'src/app/services/admin-login.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  //products: Product[]

  dbproducts:Product[]= []

  constructor(private cartService: CartService,private adminService: AdminLoginService) {
    //this.dbproducts=cartService.products
    this.dbproducts=adminService.products
   }

  ngOnInit(): void {
    console.log("OnInit is called")
    this.dbproducts=this.adminService.products
  }

 

  

}
