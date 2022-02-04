import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products:Product[]=[];

  constructor() { 
  this.products.push({name:"OnePlus Nord CE 5G",cost:24999,id:1,description:"Blue Void, 8GB RAM, 128GB Storage"})
  this.products.push({name:"OnePlus 9R 5G",cost:39999,id:2,description:"Lake Blue, 8GB RAM, 128GB Storage"})
  this.products.push({name:"OnePlus 9RT 5G",cost:42999,id:3,description:"Hacker Black, 8GB RAM, 128GB Storage"})
  this.products.push({name:"Apple iPhone 12",cost:61999,id:4,description:"Green, 256GB Storage"})
  this.products.push({name:"Apple iPhone XR",cost:47900,id:5,description:"64GB Black (includes EarPods, power adapter)"})
  this.products.push({name:"Realme X2",cost:19999,id:6,description:"Pearl Green, 4GB RAM, 64GB Storage"})
  this.products.push({name:"Realme X2 Pro",cost:29990,id:7,description:"Lunar White, 8 GB RAM, 128 GB"})
  this.products.push({name:"Samsung Galaxy Z Flip3 5G",cost:84557,id:8,description:"Lavender, 8GB RAM, 128GB Storage"})
  this.products.push({name:"Samsung S20 Plus BTS Edition",cost:87999,id:9,description:"Cosmic Gray, 8GB RAM, 128GB"})



  

}

  addProduct(){

  }

  modifyProduct(){

  }

  deleteProduct(){
    
  }


}



