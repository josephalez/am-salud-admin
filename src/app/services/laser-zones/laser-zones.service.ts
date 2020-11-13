import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';
import { StoreLaserZoneDto } from '../../schemas/store-lazer-zone.dto';

@Injectable({
  providedIn: 'root'
})
export class LaserZonesService {

  constructor(
    private connectionService:ConnectionService
  ) { }

  fetchLaserZones(page:number=1):Promise<any>{
    return this.connectionService.getUrl('admin/zonas?page='+page);
  }

  deleteLaserZone(laserZone:number):Promise<any>{
    return this.connectionService.deleteUrl('admin/zonas/'+laserZone);
  }

  updateLaserZone(laserZone:number,updateParams:FormData):Promise<any>{
    return this.connectionService.postUrl('admin/zonas/'+laserZone, updateParams);
  }
  
  addLaserZone(storeParams:StoreLaserZoneDto):Promise<any>{
    return this.connectionService.postUrl('admin/zonas',storeParams);
  }
  
}
