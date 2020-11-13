import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor(
    private connectionService:ConnectionService
  ) { }

  admin():Promise<any>{
    return this.connectionService.getUrl('reportes/reservas/admin');
  }

  worker():Promise<any>{
    return this.connectionService.getUrl('reportes/reservas/worker');
  }

}
