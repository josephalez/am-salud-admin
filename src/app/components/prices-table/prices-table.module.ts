import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesTableComponent } from './prices-table.component';
import { PricesListModule } from '../prices-list/prices-list.module';



@NgModule({
  declarations: [
    PricesTableComponent,
  ],
  imports: [
    CommonModule,
    PricesListModule,
  ],
  exports:[
    PricesTableComponent,
  ]
}) 
export class PricesTableModule { }
