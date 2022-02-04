import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  products:Product[]

  idById:number=0
  nameByName:string=""

  prodById: Product
  prodByName:Product

  constructor(private cartService:CartService) {
    this.products=cartService.products
    this.prodById= new Product()
    this.prodByName= new Product()
   }

  ngOnInit(): void {
  }

  searchProdById(){
    let flag:number=0
    this.products.forEach(element => {
      if(this.idById==element.id){
        this.prodById=element
        flag=1
      }
    });
    if(flag==0){
      alert("Product Not Found")
    }
  }

  searchProdByName(){
    let flag:number=0
    this.products.forEach(element => {
      if(this.nameByName==element.name){
        this.prodByName=element
        flag=1
      }
    });
    if(flag==0){
      alert("Product Not Found")
    }
  }

  updateById(){
    alert("Updated the product")
    this.idById=0
    this.prodById= new Product()
  }

  updateByName(){
    alert("Updated the product")
    this.nameByName=""
    this.prodByName= new Product()
  }

}
