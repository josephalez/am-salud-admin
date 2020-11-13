import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor (
    private connectionService: ConnectionService
  ) { }

  getUsersWithPrices(page: number = 1): Promise<any> {
    return this.connectionService.getUrl('clients/prices?page=' + page);
  }

  storeSpecialPrice(params: any): Promise<any> {
    return this.connectionService.postUrl('clients/prices', params);
  }

  storeWorkerPrice(params: any): Promise<any> {
    return this.connectionService.postUrl('workers/prices', params);
  }
  getWorkerPrice(): Promise<any> {
    return this.connectionService.getUrl('workers/prices');
  }
}
