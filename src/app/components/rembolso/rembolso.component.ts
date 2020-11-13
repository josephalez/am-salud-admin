import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AlertService } from '../../services/notifications/alert.service';
import { ReservationsService } from '../../services/reservations/reservations.service';

@Component({
  selector: 'app-rembolso',
  templateUrl: './rembolso.component.html',
  styleUrls: ['./rembolso.component.scss']
})
export class RembolsoComponent implements OnInit {

  @Input() reservation: any = null;

  
  @Output() reload:any=new EventEmitter;

  discardedZones: any[] = [];
  selectzone: any = null;
  constructor (
    private alertService: AlertService,
    private reservationService: ReservationsService,
  ) { }

  ngOnInit() {
    console.log('rembolso');
    console.log(this.reservation);
  }
  sacar(zone) {
    this.selectzone = zone;
    //zone.status = "1";
  }
  select(index) {
    let zone = this.reservation.zonas[index];
    let id = zone.id;
    let position = null;

    console.log(this.reservation);

    if ((position = this.discardedZones.findIndex(el => el.id == id)) >= 0) {

      console.log('push', position)
      this.discardedZones.splice(position, 1);

    } else {

      console.log('pull');
      this.discardedZones.push(zone);

    };
  }

  isDiscarded(id) {
    if (this.discardedZones.find(el => el.id == id) ? true : false) {
      return false;
    } else return true;
  }

  restore(index) {
    this.discardedZones.splice(index, 1);
  }

  async edit() {
    try {

    } catch (error) {

    }
  }
  async hacer(accion) {
    console.log(accion);

    if (accion) {
      console.log(this.selectzone);
      const rest = await this.reservationService.devolucion(this.selectzone).catch((err) => { console.log(err) });
      console.log("esto es lo que devuelve ");
      this.reload.emit('success');
      console.log(rest);
    }
    this.selectzone = null;
  }
}
