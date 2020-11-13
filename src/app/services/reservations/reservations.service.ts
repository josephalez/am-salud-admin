import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor (
    private connectionService: ConnectionService
  ) { }

  getMyReservations(month: string = ""): Promise<any> {
    return this.connectionService.getUrl('reservations/work' + month);
  }

  confirm(id: any): Promise<any> {
    return this.connectionService.getUrl('reservations/confirm/' + id);
  }

  cancel(id: any): Promise<any> {
    return this.connectionService.deleteUrl('reservations/' + id);
  }
  devolucion(zona: any) {
    return this.connectionService.getUrl('devolucion/reservars/' + zona.reservation + '/zona/' + zona.idZonaReserva);
  }
}
