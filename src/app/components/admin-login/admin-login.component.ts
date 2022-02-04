import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/services/admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email:string=""
  pass:string=""

  loginForm= new FormGroup({
    email1: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    pass1: new FormControl('')
  })

  get email1():any{return this.loginForm.get('email1')}
  get pass1():any{return this.loginForm.get('pass1')}

  constructor(private adminService:AdminLoginService, private router:Router) { }

  ngOnInit(): void {
  }

  doLogin(){
    if(this.adminService.checkAdmin(this.email,this.pass)){
      this.router.navigateByUrl("/admin-main")
    }
  }

}
