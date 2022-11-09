import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductsComponent } from './product-list/add-products/add-products.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { ProductDetailsComponent } from './product-list/product-details/product-details.component';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    ProductListComponent,
    AddProductsComponent,
    ProductDetailsComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    FormsModule
  ]
})
export class ShoppingCartModule { }
