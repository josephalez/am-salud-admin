import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpedientsService } from '../../services/expedients/expedients.service';
import { AlertService } from '../../services/notifications/alert.service';
import { AssistanceService } from '../../services/assistance/assistance.service';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.scss']
})
export class AssistanceComponent implements OnInit {
  
  expedients:any[]=[];
  currentPage:number=1;
  lastPage:number=1;
  title:string='';
  service:number=1;

  constructor(
    private route:ActivatedRoute,
    private assistanceService:AssistanceService,
    private alertService:AlertService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(async params=>{
      this.title= params.title;
      this.service= params.service;
      await this.fetchAssistances(this.currentPage);
    }); 
  }

  async fetchAssistances(page:number){
    try {
      let req= await this.assistanceService.fetchAssistances(page, this.service);
      console.log(req);
      this.currentPage=req.current_page;
      this.lastPage=req.last_page;
      this.expedients=req.data;
    } catch (err) {
      console.log(err);
      this.alertService.alertError('Error al recibir la lista de asistencias');
    }
  }

}
