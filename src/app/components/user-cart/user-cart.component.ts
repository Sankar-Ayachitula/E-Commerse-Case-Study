import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TotalAmount } from 'src/app/model/total-amount';
import { UserProduct } from 'src/app/model/user-product';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  amountObj:TotalAmount

  cart:UserProduct[]=[]

  constructor(private userService:UserLoginService, private router:Router) { 
      
      if(userService.currUser!=null){
        this.cart= userService.currUser.cart
        this.amountObj= userService.totalAmount
      }else{
        this.amountObj=new TotalAmount()
      }
    }
  ngOnInit(): void {
  }

  add(userproduct:UserProduct){
    userproduct.quantity++
    this.userService.totalAmount.amount+=userproduct.product.cost
  }

  remove(userProduct:UserProduct){
    if(userProduct.quantity==1){
      
      this.userService.removeProdFromCurrUser(userProduct)
      
    }
    else{
      userProduct.quantity--
    }
    this.userService.totalAmount.amount-=userProduct.product.cost
  }
  
  signOut(){
    this.router.navigateByUrl("/home")
    this.userService.currUser=null
    this.userService.totalAmount=new TotalAmount()
    //alert("Signing Out Successfully")
  }

}
