import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Product } from '../model/product';
import { TotalAmount } from '../model/total-amount';
import { User } from '../model/user';
import { UserProduct } from '../model/user-product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DbUser } from '../model/db-user';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  users:User[]=[]

  currUser:User|null=null
  
  currrUser:DbUser= new DbUser()

  totalAmount:TotalAmount

  constructor(private router:Router,private httpClient:HttpClient) {
    this.users=[{email:"sankarayachitula@gmail.com",password:"test@123",cart:[],totalAmount:new TotalAmount()}]
    this.totalAmount= new TotalAmount()
    
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

   addUser(user:User):Observable<any>{
    return this.httpClient.post("http://localhost:3000/users/",user,{responseType: 'text'})
   }

   loginUser(user:User):Observable<any>{
     //console.log(user)
     return this.httpClient.post("http://localhost:3000/login/",user,{responseType:'text'})
   }


}
