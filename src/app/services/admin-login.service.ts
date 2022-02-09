import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';
import { Product } from '../model/product';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {


  products:Product[]=[]

  //having only 1 admin right now
  admin:Admin
  
  loggedInAdmin: Admin|null=null
  
  constructor(private httpClient: HttpClient) {
    this.admin= new Admin("admin@gmail.com","admin@123")
   }

   checkAdmin(email:string,pass:string):boolean{
     if(email==this.admin.email && pass==this.admin.pass){
       this.loggedInAdmin=this.admin
      return true
     }
     else{
       return false
     }
    
   }

   signOut(){
    this.loggedInAdmin=null
   }

   loginAdmin(user:Admin):Observable<any>{
    //console.log(user)
    return this.httpClient.post("http://localhost:3000/adminlogin/",user,{responseType:'text'})
  }

  loadProducts():Observable<any>{
    //console.log(user)
    return this.httpClient.get("http://localhost:3000/products/")
  }

  deleteProducts(id:number):Observable<any>{
    return this.httpClient.post("http://localhost:3000/products/"+id,{responseType:'text'})
  }


  getProducts(){
    this.loadProducts().subscribe(
      (data) => {
        console.log(JSON.stringify(data));
        this.products = data;

      },
      (error) => {
        console.log("Some thing went wrong")
        console.log(error.error);

      }
    )
  }


  addProduct(product:Product):Observable<any>{
    return this.httpClient.post("http://localhost:3000/products/",product,{responseType:'text'})
  }
}
