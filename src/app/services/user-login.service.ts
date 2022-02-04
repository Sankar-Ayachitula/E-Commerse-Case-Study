import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { TotalAmount } from '../model/total-amount';
import { User } from '../model/user';
import { UserProduct } from '../model/user-product';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService implements CanActivate{

  users:User[]=[]

  currUser:User|null=null

  totalAmount:TotalAmount

  constructor(private router:Router) {
    this.users=[{email:"sankarayachitula@gmail.com",password:"test@123",cart:[],totalAmount:new TotalAmount()}]
    this.totalAmount= new TotalAmount()
    //ez
   }
  canActivate(): boolean {
    if(this.currUser==null){
      this.router.navigateByUrl("/login")
      alert("please login")
      return false
    }
    else{
      return true
    }
  }

   checkUser(email:string,pass:string):boolean{
    console.log("In checkUser function")
    console.log(email+" and "+pass)
    let temp=0
    for(let entry of this.users){
      console.log(entry.email+" and "+entry.password)
      console.log(email==entry.email)
      console.log(pass==entry.password)
      if(entry.email==email && entry.password==pass){
        this.currUser=entry
        this.totalAmount=entry.totalAmount
        
        return true
      }
    }
    return false
   }

   addProductToCurrUser(product:Product){
     
    let userProducts: UserProduct[]
    
    if(this.currUser!=null){
      let flag:number=0
      userProducts=this.currUser.cart
      userProducts.forEach(element => {
        if(element.product.id==product.id){
          element.quantity+=1
          flag+=1
        }
      });
      if(flag==0){
        let userProduct:UserProduct= new UserProduct()
        userProduct.product=product
        userProduct.quantity=1
        this.currUser.cart.push(userProduct)
      }
      // alert(JSON.stringify(this.currUser.cart))
      alert("Product added to Cart")
      this.totalAmount.amount+=product.cost
    }
   }

   removeProdFromCurrUser(userProduct:UserProduct){
     if(this.currUser!=null){
      let userProducts:UserProduct[]= this.currUser.cart
      userProducts.forEach(element => {
        if(element.product.id==userProduct.product.id){
          let key:number= userProducts.indexOf(element)
          userProducts.splice(key,1)
        }
      });       
     }

   }

   signOut(){
     this.currUser=null
   }


}
