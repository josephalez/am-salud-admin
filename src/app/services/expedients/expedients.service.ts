import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Injectable({
  providedIn: 'root'
})
export class ExpedientsService {

  constructor(
    private connectionService:ConnectionService
  ) { }

  fetchExpedients(page:number=1, service:number=null):Promise<any>{
    return this.connectionService.getUrl('expedients'+(service?('/'+service):'')+'?page='+page);
  }

}
