import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'products-tracking',
  templateUrl: './products-tracking.component.html',
  styleUrls: ['./products-tracking.component.scss']
})
export class ProductsTrackingComponent implements OnInit {

  @Input() pedidos:any[]=[];

  @Output() reload:any=new EventEmitter;

  selectedPedido:any=null;

  constructor() { }

  ngOnInit() {
  }

  selectPedido(i){
    this.selectedPedido= this.pedidos[i];
  }

  emitReload(){
    this.reload.emit('');
  }

}
