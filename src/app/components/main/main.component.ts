import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { TotalAmount } from 'src/app/model/total-amount';
import { CartService } from 'src/app/services/cart.service';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({      
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

products:Product[]=[]

constructor(private cartService:CartService, private userService:UserLoginService, private router: Router){
  this.products= cartService.products
}

  ngOnInit(): void {
  }

  addProductToCart(product:Product){
    this.userService.addProductToCurrUser(product)
    //alert("Product Added"+ JSON.stringify(product))
  }

  goToCart(){
    this.router.navigateByUrl("/user-cart")
  }

  signOut(){
    this.router.navigateByUrl("/home")
    this.userService.currUser=null
    this.userService.totalAmount=new TotalAmount()
    //alert("Signed Out Successfully")
  }

}
