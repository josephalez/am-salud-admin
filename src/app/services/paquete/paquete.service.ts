import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Injectable({
    providedIn: 'root'
})
export class PaqueteService {

    constructor (private connectionService: ConnectionService) { }


    fetchLaserZones(page: number = 1): Promise<any> {
        return this.connectionService.getUrl('paquetes?page=' + page);
    }

    fetchAllPaquetes(creditId:number):Promise<any>{
        return this.connectionService.getUrl('paquetes?data_array='+creditId);
    }

    getAllMoneda(): Promise<any> {
        return this.connectionService.getUrl('credito');
    }
    
    insert(data) {
        return this.connectionService.postUrl('paquetes', data);
    }

    update(id, data) {
        return this.connectionService.putUrl('paquetes/' + id, data);
    }
}
