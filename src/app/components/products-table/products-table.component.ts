import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {


  @Input() products:any[]=[];
  
  selectedProduct:any=null;

  constructor() { }

  ngOnInit() {

  }

  selectProduct(index:number=0){
    this.selectedProduct= this.products[index];
  }

}
