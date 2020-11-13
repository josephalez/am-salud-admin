import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../services/reservations/reservations.service';
import * as moment from 'moment'
import { AlertService } from '../../services/notifications/alert.service';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.scss']
})
export class MyReservationsComponent implements OnInit {

  beforeRemainingDays:any[]=[];
  afterRemainingDays:any[]=[];
  monthDays:any[]=[];

  reservations:any[]=[];

  currentMonth:string='';
  currentYear:string='';

  constructor(
    private reservationService:ReservationsService,
    private alertService:AlertService
  ) { }

  ngOnInit() {
    this.buildCalendar();
  }

  async buildCalendar(month=null){
    console.log(month);
    this.fetchReservations(month);
    this.initCalendar(month);
  }

  async fetchReservations(month=null){

    try {  
      let date='';
      if(month) {
        date= '?from_month='+moment().month(month).format('YYYY-MM-DD');
      }
      let req = await this.reservationService.getMyReservations(date);
      console.log("my reservations ", req);
      this.reservations=req;
    } catch (error) {
      console.log(error);
      this.alertService.alertError("Error al obtener Mis reservas");
    }
  }

  async initCalendar(month=null){

    console.log("date month ", month)

    this.beforeRemainingDays=[];
    this.afterRemainingDays=[];
    this.monthDays=[];

    let currentMoment= moment();

    let currentMonth= moment();
    let currentWeek= moment();
    let lastWeek= moment();
    
    if(month){

      currentMoment.month(month);
      currentMonth.month(month);
      currentWeek.month(month);
      lastWeek.month(month);

    }
    
    this.currentMonth=currentMoment.locale('es').format('MMMM');

    this.currentYear= currentMoment.format('YYYY');

    currentMonth = currentMonth.startOf('month');
    currentWeek = currentWeek.startOf('month').startOf('isoWeek');
    lastWeek = lastWeek.endOf('month').startOf('isoWeek');

    Array(7).fill(null).map(()=>{

      if(currentWeek.month()!==currentMoment.month()){
        this.beforeRemainingDays.push(moment(currentWeek))
      }

      currentWeek.add(1,'days');

      if(lastWeek.month()!==currentMoment.month()){
        this.afterRemainingDays.push(moment(lastWeek))
      }

      lastWeek.add(1,'days');

    });

    Array(currentMonth.daysInMonth()).fill(null).map(()=>{

      console.log("numbers dont lie ",currentMonth.daysInMonth());

      this.monthDays.push(moment(currentMonth));

      console.log('pushing inside month', moment(currentMonth));
      

      currentMonth.add('days',1);

    });

  }

}
