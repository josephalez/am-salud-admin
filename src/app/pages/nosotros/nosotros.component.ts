import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkersService } from '../../services/workers/workers.service';
import { AlertService } from '../../services/notifications/alert.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  personal:any[]=[];
  currentPage:number=1;
  lastPage:number=1;

  constructor(
    private route:ActivatedRoute,
    private workerService:WorkersService,
    private alertService:AlertService
  ) { }

  async ngOnInit() {
      await this.fetchPersonal(this.currentPage);
  }

  async fetchPersonal(page:number){
    try {
      let req= await this.workerService.nosotrosGet(page);
      console.log(req);
      this.currentPage=req.current_page;
      this.lastPage=req.last_page;
      this.personal=req.data;
    } catch (err) {
      console.log(err);
     this.alertService.alertError('Error al recibir la lista del Personal');
    }
  }

}
