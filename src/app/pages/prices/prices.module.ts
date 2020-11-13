import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PricesComponent } from './prices.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { PricesTableModule } from '../../components/prices-table/prices-table.module';
import { StorePriceModule } from '../../components/store-price/store-price.module';

const routes:Routes=[
  {
    path:'',
    component:PricesComponent,
  }
]

@NgModule({
  declarations: [
    PricesComponent
  ],
  imports: [
    CommonModule,
    PricesTableModule,
    StorePriceModule,    
    LayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class PricesModule { }
