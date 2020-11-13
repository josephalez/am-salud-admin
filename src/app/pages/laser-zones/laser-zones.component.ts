import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/notifications/alert.service';
import { LaserZonesService } from '../../services/laser-zones/laser-zones.service';

@Component({
  selector: 'app-laser-zones',
  templateUrl: './laser-zones.component.html',
  styleUrls: ['./laser-zones.component.scss']
})
export class LaserZonesComponent implements OnInit {

  zones:any[]=[];
  currentPage=1;
  lastPage=1;

  constructor(
    private laserZoneService:LaserZonesService,
    private alertService:AlertService,
  ) { }

  ngOnInit() {
    this.fetchZonesList();
  }

  async fetchZonesList(page=this.currentPage){
    try {
      let req= await this.laserZoneService.fetchLaserZones(page);
      console.log(req);
      this.currentPage=req.current_page;
      this.lastPage=req.last_page;
      this.zones=req.data;
    } catch (err) {
     this.alertService.alertError('Error al recibir la lista de zonas');
    }
  }
}
