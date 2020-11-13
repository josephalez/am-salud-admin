import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';
import { StoreServiceDto } from '../../schemas/store-service.dto';
import { ServiceDto } from '../../schemas/service.dto';

@Injectable({
  providedIn: 'root'
})
export class ServsService {

  constructor(
    private connectionService:ConnectionService
  ) { }

  fetchServices():Promise<any>{
    return this.connectionService.getUrl('services');
  }

  updateService(params:ServiceDto):Promise<any>{
    return this.connectionService.putUrl('services/'+params.id,params);
  }

  deleteService(id:number):Promise<any>{
    return this.connectionService.deleteUrl('services/'+id);
  }

  newService(params:StoreServiceDto):Promise<any>{
    return this.connectionService.postUrl('services',params);
  }

}
