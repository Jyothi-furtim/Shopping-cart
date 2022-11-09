import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../mainframe/index/index.component';

import { ProductListComponent } from './product-list/product-list.component';
import { AddProductsComponent } from './product-list/add-products/add-products.component';
import { ProductDetailsComponent } from './product-list/product-details/product-details.component';

import { CartListComponent } from './cart-list/cart-list.component';
const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', redirectTo: 'product-list', pathMatch: "full" },
      { path: 'product-list', component: ProductListComponent },
      { path: 'add-products', component: AddProductsComponent },
      { path: 'product-details', component: ProductDetailsComponent },
      { path: 'cart-list', component: CartListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
