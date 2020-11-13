import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsTableComponent } from './products-table.component';
import { ProductDetailsModule } from '../product-details/product-details.module';



@NgModule({
  declarations: [
    ProductsTableComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsModule,
  ],
  exports:[
    ProductsTableComponent
  ]
})
export class ProductsTableModule { }
