import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StorePriceComponent } from './store-price.component';



@NgModule({
  declarations: [
    StorePriceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    StorePriceComponent
  ]
})
export class StorePriceModule { }
