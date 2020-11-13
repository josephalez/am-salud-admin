import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { EventsListModule } from '../events-list/events-list.module';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    EventsListModule
  ],
  exports:[
    CalendarComponent
  ]
})
export class CalendarModule { }
