import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(
    private connectionService:ConnectionService
  ) { }

  getPedidos(page:number=1, keyword:string=null):Promise<any> {
    return this.connectionService.getUrl('admin/pedidos?page='+(page)+(keyword?('&keyword='+keyword):''));
  }

  confirmarPedido(pedido_id:number):Promise<any>{
    return this.connectionService.postUrl('checkout/'+pedido_id,{});
  }

}
