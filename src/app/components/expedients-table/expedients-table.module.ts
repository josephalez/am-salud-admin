import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpedientsTableComponent } from './expedients-table.component';
import { ReservationsListModule } from '../reservations-list/reservations-list.module';



@NgModule({
  declarations: [
    ExpedientsTableComponent
  ],
  imports: [
    CommonModule,
    ReservationsListModule
  ],
  exports:[
    ExpedientsTableComponent,
  ]
})
export class ExpedientsTableModule { }
