import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainframeRoutingModule } from './mainframe-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import {RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    IndexComponent
    
  ],
  imports: [
    CommonModule,
    MainframeRoutingModule,
    RouterModule
  ]
})
export class MainframeModule { }
