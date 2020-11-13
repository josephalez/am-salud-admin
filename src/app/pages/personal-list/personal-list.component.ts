import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalService } from '../../services/personal/personal.service';
import { AlertService } from '../../services/notifications/alert.service';

@Component({
  selector: 'app-personal-list',
  templateUrl: './personal-list.component.html',
  styleUrls: ['./personal-list.component.scss']
})
export class PersonalListComponent implements OnInit {

  members:any[]=[];
  currentPage:number=1;
  lastPage:number=1;
  title:string='';
  service:number=1;

  constructor(
    private route:ActivatedRoute,
    private personalService:PersonalService,
    private alertService:AlertService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(async params=>{
      this.title= params.title;
      this.service= params.service;
      await this.fetchWorkers(this.currentPage);
    });
  }

  async fetchWorkers(page:number){
    try {
      let req= await this.personalService.fetchWorkers(page, this.service);
      console.log(req);
      this.currentPage=req.current_page;
      this.lastPage=req.last_page;
      this.members=req.data;
    } catch (err) {
      console.log(err);
     this.alertService.alertError('Error al recibir la lista de usuarios');
    }
  }

}

