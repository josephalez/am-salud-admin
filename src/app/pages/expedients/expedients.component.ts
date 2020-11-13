import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalService } from '../../services/personal/personal.service';
import { AlertService } from '../../services/notifications/alert.service';
import { ExpedientsService } from '../../services/expedients/expedients.service';

@Component({
  selector: 'app-expedients',
  templateUrl: './expedients.component.html',
  styleUrls: ['./expedients.component.scss']
})
export class ExpedientsComponent implements OnInit {

  expedients:any[]=[];
  currentPage:number=1;
  lastPage:number=1;
  title:string='';
  service:number=1;

  constructor(
    private route:ActivatedRoute,
    private expedientService:ExpedientsService,
    private alertService:AlertService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(async params=>{
      this.title= params.title;
      this.service= params.service;
      await this.fetchExpedients(this.currentPage);
    });
  }

  async fetchExpedients(page:number){
    try {
      let req= await this.expedientService.fetchExpedients(page, this.service);
      console.log(req);
      this.currentPage=req.current_page;
      this.lastPage=req.last_page;
      this.expedients=req.data;
    } catch (err) {
      console.log(err);
      this.alertService.alertError('Error al recibir la lista de expedientes');
    }
  }

}
