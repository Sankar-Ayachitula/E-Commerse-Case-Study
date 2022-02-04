import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/user-login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string=""
  pass:string=""
  
  loginForm= new FormGroup({
    email1: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    pass1: new FormControl('',Validators.required)
  })

  get email1():any{return this.loginForm.get('email1')}
  get pass1():any{return this.loginForm.get('pass1')}


  constructor(private router:Router,private userService:UserLoginService) { }

  ngOnInit(): void {
  }

  doLogin(){
    // alert(JSON.stringify(this.userService.users))
    if(this.userService.checkUser(this.email,this.pass)){
      this.router.navigateByUrl("/main")
    }
    else{
      alert("User Email or Password is Incorrect")
    }
  }



}
