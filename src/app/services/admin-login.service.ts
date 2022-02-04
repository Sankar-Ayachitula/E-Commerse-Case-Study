import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  //having only 1 admin right now
  admin:Admin
  
  loggedInAdmin: Admin|null=null
  constructor() {
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
}
