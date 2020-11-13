import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsTrackingComponent } from './products-tracking.component';
import { DetailedPedidoModule } from '../detailed-pedido/detailed-pedido.module';



@NgModule({
  declarations: [
    ProductsTrackingComponent
  ],
  imports: [
    CommonModule,
    DetailedPedidoModule,
  ],
  exports:[
    ProductsTrackingComponent,
  ]
})
export class ProductsTrackingModule { }
