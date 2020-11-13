import { Component, OnInit, Input } from '@angular/core';
import { AppSettings } from '../../app.settings';

@Component({
  selector: 'prices-table',
  templateUrl: './prices-table.component.html',
  styleUrls: ['./prices-table.component.scss']
})
export class PricesTableComponent implements OnInit {

  @Input() prices:any=[]=[]

  //selectedPrices:any[]=[];

  constructor() { }

  ngOnInit() {
  }

  
  selecPrice(index:number){

    let user= this.prices[index];

    //this.selectedPrices= user.presios;

  }

   getImage(index:number){

    let price= this.prices[index];

    if(price.client.profile_picture){
      return AppSettings.apiUrl+'/'+price.client.profile_picture
    }
    else return '../../assets/img/default/user.png';
  }

}
