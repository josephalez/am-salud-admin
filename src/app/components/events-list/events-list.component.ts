import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertService } from '../../services/notifications/alert.service';
import { ReservationsService } from '../../services/reservations/reservations.service';
import { AppSettings } from '../../app.settings';
import * as moment from 'moment';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  @Input() events:any[]=[];

  @Output() refresh:any= new EventEmitter;

  constructor(
    private alertService:AlertService,
    private reservationService:ReservationsService,
  ) { }

  ngOnInit() {
  }

  getProfilePic(index){
    let reservation=this.events[index];

    if(reservation.user_avatar) return AppSettings.apiUrl+'/'+reservation.user_avatar;

    return "../../assets/img/default/user.png"
  }

  parseHour(index){
    let reservation = this.events[index];

    console.log(reservation);

    return moment(reservation.reservation_start).format('h:mm a')+' - '+moment(reservation.reservation_end).format("h:mm a");
  }

  async cancel(index){
    try {
      let reservation= this.events[index];
      let req= await this.reservationService.cancel(reservation.id);
      console.log(req);
      this.alertService.alertSuccess(req.message);
      this.refresh.emit("success");
    } catch (err) {
      console.log(err);
      this.alertService.alertError(err.error.error);
    }
  }

  async confirm(index){
    try {
      let reservation= this.events[index];
      let req= await this.reservationService.confirm(reservation.id);
      console.log(req);
      this.alertService.alertSuccess(req.message);
      this.refresh.emit("success");
    } catch (err) {
      console.log(err);
      this.alertService.alertError(err.error.error);
    }
  }

}
