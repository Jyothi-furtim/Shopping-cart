import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/_services/common-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList:any;
  addProductsComp:boolean = false; 
  constructor(private router: Router, private commonService:CommonServiceService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('productList')){
      this.getProductList();
    } else {
      this.productList = JSON.parse(localStorage.getItem('productList')!);
    }
    localStorage.removeItem('product-details');
  }
  addProducts(){
    this.addProductsComp = true;
    // this.router.navigate(['product/add-products']);
  }
  productDetails(product:any){
    localStorage.setItem('product-details',JSON.stringify(product));
    this.router.navigate(['product/product-details']);
 
  }
  async getProductList(){
    this.productList = await this.commonService.getProductList();
    localStorage.setItem('productList', JSON.stringify(this.productList));
  }
  addProduct(product:any){
    let count = 0;
    this.productList.forEach((key:any) => {
       if(key.id == product.id){
        count = 1;
        key.name = product.name;
        key.description = product.description;
        key.price = product.price;
       }
    });
    if(count == 0){
      this.productList.push(product);
    }
    
    localStorage.setItem('productList', JSON.stringify(this.productList));
  }
  deleteProduct(itemId:any){
    this.productList.forEach((key:any, i:any) => {
      if (itemId == key.id){
        this.productList.splice(i, 1);
        localStorage.setItem('productList', JSON.stringify(this.productList));
      }
    });
  }
  back(){
    this.addProductsComp = false;
  }
}
