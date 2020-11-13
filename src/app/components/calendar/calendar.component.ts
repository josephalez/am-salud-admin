import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'ams-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Output() refresh:any= new EventEmitter;  

  @Input() currentMonth:string='';
  @Input() currentYear:string='';  

  @Input() days:any[]=[];
  @Input() events:any[]=[];
  @Input() initDaysOff:any[]=[];
  @Input() lastDaysOff:any[]=[];

  selectedEvent:any=null;
  selectedEvents:any[]=[];
  
  constructor() { }

  ngOnInit() {
    
  }

  backMonth(){
    let newMonth= moment().locale('es').month(this.currentMonth).subtract('months',1);
    console.log(newMonth.month());
    this.refreshData(newMonth.month());
  }

  nextMonth(){
    let newMonth= moment().locale('es').month(this.currentMonth).add('months',1);
    console.log(newMonth.month());
    this.refreshData(newMonth.month());
  }

  getEventLabel(index){
    return this.events.find((evnt,i)=>{
      return moment(evnt.reservation_start).format('Y-MM-DD')===this.days[index].format('Y-MM-DD');
    });
  }

  getEventList(index){
    return this.events.filter((evnt,i)=>{
      return moment(evnt.reservation_start).format('Y-MM-DD')===this.days[index].format('Y-MM-DD');
    });
  }

  async selectEvent(index){
    this.selectedEvents= await this.getEventList(index);
    this.selectedEvent= this.events[index];
  }

  refreshData(month=null){
    this.refresh.emit(month);
  }

}
