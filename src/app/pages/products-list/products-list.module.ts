import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list.component';
import { ProductsTrackingModule } from '../../components/products-tracking/products-tracking.module';
import { LayoutModule } from '../../components/layout/layout.module';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  {
    path:'',
    component:ProductsListComponent
  }
];

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    ProductsTrackingModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductsListModule { }
