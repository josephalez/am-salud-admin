import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { WorkersService } from '../../services/workers/workers.service';
import { AlertService } from '../../services/notifications/alert.service';

@Component({
  selector: 'app-nosotros-table',
  templateUrl: './nosotros-table.component.html',
  styleUrls: ['./nosotros-table.component.scss']
})
export class NosotrosTableComponent implements OnInit {

  @Input() personal:any=[]=[];

  selectedWorker:any=null;

  @Output() reload:any=new EventEmitter;

  constructor(
    private workerService:WorkersService,
    private alertService:AlertService,
  ) {}

  ngOnInit() {}
  
  getImage(index){

    let user= this.personal[index];

    if(user.profile_picture){
      return AppSettings.apiUrl+'/'+user.profile_picture
    }
    else return '../../assets/img/default/user.png';

  }

  async delete(id:number){

    console.log('id',id)

    try {

      let req = await this.workerService.nosotrosDelete(id);

      console.log(req);

      this.emitReload();
      
    } catch (error) {
      
      console.log(error);

      this.alertService.alertError('error al eliminar al empleado')

    }

  }

  select(index:number){
    this.selectedWorker = this.personal[index];
  }
  
  emitReload(){
    this.reload.emit();
  }

}