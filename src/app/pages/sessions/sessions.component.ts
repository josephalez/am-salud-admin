import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/notifications/alert.service';
import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

 
  sessions:any[]=[];
  currentPage:number=1;
  lastPage:number=1;
  title:string='';
  service:number=1; 

  constructor(
    private route:ActivatedRoute,
    private sessionService:SessionService,
    private alertService:AlertService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(async params=>{
      this.title= params.title;
      this.service= params.service;
      await this.fetchSessions(this.currentPage);
    });
  }

  async fetchSessions(page:number){
    try {
      let req= await this.sessionService.fetchSessions(page, this.service);
      console.log(req);
      this.currentPage=req.current_page;
      this.lastPage=req.last_page;
      this.sessions=req.data;
    } catch (err) {
      console.log(err);
      this.alertService.alertError('Error al recibir la lista de asistencias');
    }
  }


}
