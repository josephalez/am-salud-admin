import { Component, OnInit } from '@angular/core';
import { PricesService } from '../../services/prices/prices.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { AlertService } from '../../services/notifications/alert.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  currentPage:number=1;
  lastPage:number=1;

  prices:any[]=[];

  users:any[]=[];

  constructor(
    private route:ActivatedRoute,
    private priceService:PricesService,
    private userService:UserService,
    private alertService:AlertService,
  ) { }

  async ngOnInit() {
    this.route.params.subscribe(async obj=>{
      await this.fetchPrices();
      await this.fetchUsers()
    })
  }

  async fetchUsers(){
    try {

      let req= await this.userService.getAllUsers();

      console.log('users fetch',req);

      this.users=req;
      
    } catch (error) {

      console.log(error);
      
      this.alertService.alertError('Error al obtener lista de usuarios')

    }
  }

  async fetchPrices(page:number=this.currentPage){
    try {

      let req= await this.priceService.getUsersWithPrices(page);

      console.log(req);
      
      this.prices= req.data;

      this.currentPage= req.current_page;
      this.lastPage= req.last_page;

    } catch (error) {
      
      console.log(error)

      this.alertService.alertError('Error al obtener lista de precios')      

    }
  }

}
