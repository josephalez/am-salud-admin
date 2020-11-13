import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Injectable({
  providedIn: 'root'
})
export class AssistanceService {

  constructor(
    private connectionService:ConnectionService
  ) { }

  
  fetchAssistances(page:number=1, service:number=null):Promise<any>{
    return this.connectionService.getUrl('assistance'+(service?('/'+service):'')+'?page='+page);
  }
}
