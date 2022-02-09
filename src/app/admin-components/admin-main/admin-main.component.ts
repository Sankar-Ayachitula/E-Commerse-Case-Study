import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from 'src/app/services/admin-login.service';


@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  constructor(private adminService:AdminLoginService){
    adminService.getProducts()
  }

  ngOnInit(): void {
  }

}
