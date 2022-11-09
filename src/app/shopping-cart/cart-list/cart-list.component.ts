import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartList:any=[];
  totalPrice:number = 0;
  purchase:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getCartList();
  }
  getCartList(){
    this.totalPrice = 0;
    this.cartList =JSON.parse(localStorage.getItem('cartList')!);
    if(this.cartList != null && this.cartList.length > 0){
      this.cartList.forEach((key:any) => {
        this.totalPrice = this.totalPrice + (key.price * key.quantity)
      });
    } else {
      this.cartList =[];
    }
    
  }
  back(){
    this.router.navigate(['product/product-list']);
  }
  delete(index:any){
    this.cartList.splice(index, 1);
    localStorage.setItem('cartList', JSON.stringify(this.cartList));
    this.getCartList();
  }
  checkOut(){
    this.purchase = true;
    localStorage.removeItem('cartList');
  }
}
