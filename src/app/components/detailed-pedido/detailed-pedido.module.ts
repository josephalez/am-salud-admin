import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedPedidoComponent } from './detailed-pedido.component';



@NgModule({
  declarations: [
    DetailedPedidoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DetailedPedidoComponent
  ]
})
export class DetailedPedidoModule { }
