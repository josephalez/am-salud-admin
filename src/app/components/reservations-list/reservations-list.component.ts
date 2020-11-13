import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppSettings } from '../../app.settings';
import * as moment from 'moment';
import { AlertService } from '../../services/notifications/alert.service';
import { ReservationsService } from '../../services/reservations/reservations.service';

@Component({
  selector: 'reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.scss']
})
export class ReservationsListComponent implements OnInit {

  @Input() reservations: any[] = [];

  @Input() isSession: boolean = false;

  @Input() isExpedient: boolean = false;

  @Output() refresh: any = new EventEmitter;

  selectedReservation: any = null;

  constructor (
    private alertService: AlertService,
    private reservationService: ReservationsService,
  ) { }

  ngOnInit() {

  }

  parseHour(index) {
    let reservation = this.reservations[index];

    return moment(reservation.reservation_start).format('h:mm a') + ' - ' + moment(reservation.reservation_end).format("h:mm a DD-MM-YYYY");
  }

  getProfilePic(index) {
    let reservation = this.reservations[index];

    if (reservation.user_avatar) return AppSettings.apiUrl + '/' + reservation.user_avatar;

    return "../../assets/img/default/user.png"
  }

  async select(index) {
    let reservation = this.reservations[index];
    console.log('selected ', reservation)
    this.selectedReservation = reservation;
    console.log(this.selectedReservation);
  }


  async cancel(index) {
    try {
      let reservation = this.reservations[index];
      let req = await this.reservationService.cancel(reservation.id);
      console.log(req);
      this.alertService.alertSuccess(req.message);
      this.refresh.emit("success");
    } catch (err) {
      console.log(err);
      this.alertService.alertError(err.error.error);
    }
  }

  async confirm(index) {
    try {
      let reservation = this.reservations[index];
      let req = await this.reservationService.confirm(reservation.id);
      console.log(req);
      this.alertService.alertSuccess(req.message);
      this.refresh.emit("success");
    } catch (err) {
      console.log(err);
      this.alertService.alertError(err.error.error);
    }
  }

  emitReload(){
    this.refresh.emit('success');
  }

}
