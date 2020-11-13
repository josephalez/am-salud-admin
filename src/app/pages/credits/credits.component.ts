import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/notifications/alert.service';
import { UserService } from '../../services/user/user.service';
import { CreditsService } from '../../services/credits/credits.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  username:string='';
  userId:number=null;

  users:any[]=[];
  credits:any[]=[];
  currentPage=1;
  lastPage=1;

  constructor(
    private userService:UserService,
    private alertService:AlertService,
    private creditService:CreditsService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(async ()=>{
      
      await this.fetchCredits();
      await this.fetchUsersList();
      
    })
  }

  setUser($event){
    this.username= $event.name+' '+$event.last_name;
    this.userId= $event.id
  }

  async fetchCredits(){
    try {
      let req= await this.creditService.getCredits();

      this.credits= req.data;

    } catch (error) {
      this.alertService.alertError('Error al obtener los tipos de crédito')
    }
  }

  async fetchUsersList(page=this.currentPage){
    try {
      let req= await this.userService.getUsers(page);
      console.log(req);
      this.currentPage=req.current_page;
      this.lastPage=req.last_page;
      this.users=req.data;
    } catch (err) {
      console.log(err);
      this.alertService.alertError('Error al recibir la lista de usuarios');
    }
  }

}
