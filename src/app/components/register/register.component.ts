import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserLoginService } from 'src/app/services/user-login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  msg:any=undefined;
  errMsg:any=undefined;

  email:string=""
  pass1:string=""
  pass2:string=""
  user:User

  registerForm= new FormGroup({
    email1: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    passs1: new FormControl('',Validators.required),
    passs2: new FormControl('',Validators.required)
  })

  get email1():any{return this.registerForm.get('email1')}
  get passs1():any{return this.registerForm.get('passs1')}
  get passs2():any{return this.registerForm.get('passs2')}

  constructor(private userLoginService:UserLoginService,private router:Router) { 
    this.user=new User()
  }

  ngOnInit(): void {
  }

  register(){
    //check if pass1 and pass2 are same

    if(this.pass1==this.pass2 && this.registerForm.get('email1')?.valid){
      this.user.email=this.email
      this.user.password=this.pass1
      //check if user already exists
      if(!this.userLoginService.checkUser(this.email,this.pass1)){
        
        this.userLoginService.addUser(this.user).subscribe(
          (data)=>{
            this.msg="Added";
            this.errMsg=undefined;
            
          },
          (error)=>{
            this.msg=undefined;
            this.errMsg="Not added"
            //JSON.stringify(error.error);
          }
        )
        this.userLoginService.users.push(this.user)
        alert("User Registered Successfully")
        this.email=""
        this.pass1=""
        this.pass2=""
        this.user= new User()
        this.router.navigateByUrl("/login")
        
      }
      else{
        this.userLoginService.currUser=null
        alert("User already exist with this email Id")
      }
      
    }
    else{
      alert("Enter Correct Email or password")
    }
    
    //push user to user-login-service
  }

}
