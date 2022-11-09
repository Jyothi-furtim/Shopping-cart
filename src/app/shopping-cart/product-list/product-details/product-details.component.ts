import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any;
  productName: any;
  price: any;
  description: any;
  image: any;
  count: any = 1;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.productDetails = JSON.parse(localStorage.getItem('product-details')!);
    this.productName = this.productDetails.name;
    this.price = this.productDetails.price;
    this.description = this.productDetails.description;
    this.image = this.productDetails.imageUrl;
    console.log(this.productDetails);
  }
  back() {
    this.router.navigate(['product/product-list']);
  }
  removeCart() {
    if (this.count > 0) {
      this.count--;
    }
  }
  addCart() {
    if (this.count < 10) {
      this.count++;
    }
  }
  addToCart() {
    let cartList = [];
    var data: any = {
      "name": this.productName,
      "imageUrl": this.image,
      "quantity": this.count,
      "price": this.price,
    }
    cartList.push(data);
    if(localStorage.getItem('cartList')){
      let list = JSON.parse(localStorage.getItem('cartList')!);
      list.push(data);
      localStorage.setItem('cartList', JSON.stringify(list));
    } else {
      localStorage.setItem('cartList', JSON.stringify(cartList));
    }
    
    this.router.navigate(['/product/cart-list']);
  }
  
}
