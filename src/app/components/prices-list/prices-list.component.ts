import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prices-list',
  templateUrl: './prices-list.component.html',
  styleUrls: ['./prices-list.component.scss']
})
export class PricesListComponent implements OnInit {

  @Input() prices:any[]=[];
  
  constructor() { }

  ngOnInit() {
  }

}
