import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesListComponent } from './prices-list.component';



@NgModule({
  declarations: [
    PricesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PricesListComponent
  ]
})
export class PricesListModule { }
