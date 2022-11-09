import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { CommonServiceService } from 'src/app/_services/common-service.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  addForms:any = [];
  productList:any = [];
  imageUrl:any=[];
  image:boolean =false;
  indexLength:any;
  editIndex:any = -1;
  errorMessage:any = '';
  @Output() productItem = new EventEmitter<any>();
  @Output() deleteItem = new EventEmitter<Number>();
  constructor(private router:Router, private commonService :CommonServiceService) { 
    this.addForms=[];
  }

  ngOnInit(): void {
    this.getProductList();
  }
  async getProductList(){
    this.productList = JSON.parse(localStorage.getItem('productList')!);
    this.indexLength = this.productList.length + 1;
  }
  showPreviewImage(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.image = true;
          this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
  }
  }
  submitForm(addProduct: NgForm){
    var productValue = addProduct.value;
    if (!productValue.name || !productValue.price || !productValue.description){
      this.errorMessage = "Please fill all fields";
      return;
    }
    var data:any = {
      "name": productValue.name,
      "price": productValue.price,
      "description": productValue.description,
      "imageUrl":this.imageUrl
    }
    if (this.editIndex != -1){
      data.id=this.editIndex;
    } else {
      data.id=this.indexLength;
    }
    this.productItem.emit(data);
    let count = 0;
    this.productList.forEach((key:any) => {
       if(key.id == data.id){
        count = 1;
        key.name = data.name;
        key.description = data.description;
        key.price = data.price;
       }
    });
    if(count == 0){
      this.productList.push(data);
    }
    addProduct.resetForm();
    this.errorMessage ='';
    this.editIndex = -1;
    this.imageUrl='';
    this.image = false;
  }
  editProduct(item:any, index:any){
    if (this.editIndex != -1){
      this.errorMessage ="Please add/update before edit";
      return;
    }
    this.editIndex = item.id;
    this.addForms.name = item.name;
    this.addForms.price = item.price;
    this.addForms.description = item.description;
    this.imageUrl = item.imageUrl;
    this.image = true;
    setTimeout(() => {
      this.productList.splice(index, 1);
    }, 150);
  }
  deleteProduct(item:any, index:any){
    console.log(index);
    
    this.productList.splice(index, 1);
    this.deleteItem.emit(item.id);
  }

}
