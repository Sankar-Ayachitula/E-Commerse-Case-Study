import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

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
}
