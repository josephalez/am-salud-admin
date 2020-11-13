import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../components/layout/layout.module';
import { ProductsTableModule } from '../../components/products-table/products-table.module';
import { StoreProductModule } from '../../components/store-product/store-product.module';

const routes:Routes=[
  {
    path:'',
    component:ProductsComponent,
  }
]

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ProductsTableModule,
    StoreProductModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
