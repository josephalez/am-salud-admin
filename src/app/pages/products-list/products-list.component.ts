import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../services/pedidos/pedidos.service';
import { AlertService } from '../../services/notifications/alert.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  currentPage=1;
  lastPage=1;

  keyword:string=null;

  pedidos:any[]=[];

  constructor(
    private pedidosService:PedidosService,
    private alertService:AlertService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(async()=>{
      this.keyword=null;
      await this.fetchPedidos();
    })
  }

  async fetchPedidos(page=this.currentPage){
    try {
      let req= await this.pedidosService.getPedidos(page, this.keyword);
      console.log(req);
      this.currentPage=req.current_page;
      this.lastPage=req.last_page;
      this.pedidos=req.data;
    } catch (error) {
      console.log(error);
      this.alertService.alertError('Error al recibir la lista de pedidos');      
    }
  }

}
