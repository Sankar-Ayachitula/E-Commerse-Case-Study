import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/user-login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { TotalAmount } from 'src/app/model/total-amount';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  changeState: any= false

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

  doLogin() {
    let user:User= new User()
    user.email=this.email
    user.password=this.pass
    // console.log(this.email+"message"+ this.pass)
    // // alert(JSON.stringify(this.userService.users))
    // if(this.userService.checkUser(this.email,this.pass)){
    //   this.router.navigateByUrl("/main")
    // }
    // else{
    //   alert("User Email or Password is Incorrect")
    // }

    this.userService.loginUser(user).subscribe(
      (response) => {
        console.log(response)
        //console.log(JSON.parse(response))
        //console.log((JSON.parse(response)).result)
        let temp:any= JSON.parse(response).result
        //console.log(temp)
        if(JSON.parse(response).result){
          this.router.navigateByUrl("\main")
        }
      },
      (error: string) => {
        console.log("The error is:" + error);
      }
    )

  }

  // doLoginUser(){
  //   let user:User= {email:this.email,password:this.pass,cart:[],totalAmount: new TotalAmount()}
  //   this.userService.loginUser(user).subscribe(
  //     ()
  //   )
  // }




}
