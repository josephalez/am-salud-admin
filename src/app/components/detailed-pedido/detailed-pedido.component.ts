import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertService } from '../../services/notifications/alert.service';
import { PedidosService } from '../../services/pedidos/pedidos.service';

@Component({
  selector: 'detailed-pedido',
  templateUrl: './detailed-pedido.component.html',
  styleUrls: ['./detailed-pedido.component.scss']
})
export class DetailedPedidoComponent implements OnInit {

  @Input() pedido:any=null;

  @Output() reload:any=new EventEmitter;

  constructor(
    private alertService:AlertService,
    private pedidoService:PedidosService
  ) { }

  ngOnInit() { }

  async confirm(){
      try {

        let req = await this.pedidoService.confirmarPedido(this.pedido.id);

        console.log(req);

        this.reload.emit('');

        if(this.pedido.status==0)this.alertService.alertSuccess('Pago confirmado exitosamente!');
        else if(this.pedido.pago==0)this.alertService.alertSuccess('Envío confirmado exitosamente!');
        
      } catch (error) {

        console.log(error);

        
        if(this.pedido.status==0) this.alertService.alertError("Error al confirmar el pago del pedido, inténtelo nuevamente");
        else if(this.pedido.sent==0) this.alertService.alertError("Error al confirmar el envío del pedido, inténtelo nuevamente");
         
      }
  }

}
