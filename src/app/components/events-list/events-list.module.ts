import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list.component';



@NgModule({
  declarations: [
    EventsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EventsListComponent
  ]
})
export class EventsListModule { }
