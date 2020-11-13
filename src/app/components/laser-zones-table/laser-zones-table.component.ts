import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { LaserZonesService } from '../../services/laser-zones/laser-zones.service';
import { AlertService } from '../../services/notifications/alert.service';
import * as moment from 'moment'

@Component({
  selector: 'laser-zones-table',
  templateUrl: './laser-zones-table.component.html',
  styleUrls: ['./laser-zones-table.component.scss']
})
export class LaserZonesTableComponent implements OnInit {

  @Output() reload:any=new EventEmitter;
  @Input() zones:any[]=[];

  constructor(
    private laserZoneService:LaserZonesService,
    private alertService:AlertService
  ) { }

  ngOnInit() {
  }

  async delete(id:number){
    try {
      let req= await this.laserZoneService.deleteLaserZone(id);
      console.log(req)
      this.alertService.alertSuccess("Zona eliminada");
      this.reload.emit("reload");
    } catch (error) {
      console.log(error)
      this.alertService.alertError('Error al eliminar la zona seleccionada')
    }
  }

  getCountMinutes(time:string){
    let minutes= moment(time,'mm:ss:SS').minutes();
    return minutes+' '+(minutes>1?'Minutos':"Minuto");
  }

}
