import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private connectionService:ConnectionService
  ) { }
 
  fetchSessions(page:number=1, service:number=null):Promise<any>{
    return this.connectionService.getUrl('sessions'+(service?('/'+service):'')+'?page='+page);
  }

}
  