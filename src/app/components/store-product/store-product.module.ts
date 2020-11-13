import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreProductComponent } from './store-product.component';



@NgModule({
  declarations: [
    StoreProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    StoreProductComponent
  ]
})
export class StoreProductModule { }
