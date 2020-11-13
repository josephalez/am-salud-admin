import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Injectable({
  providedIn: 'root'
})
export class CreditsService {

  constructor (
    private connectionService: ConnectionService,
  ) { }

  getCredits(): Promise<any> {
    return this.connectionService.getUrl('credito')
  }

  fetchPaquete(params: any): Promise<any> {
    return this.connectionService.postUrl('checkoutpaquete/admin', params)
  }

}
