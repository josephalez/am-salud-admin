import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsListComponent } from './reservations-list.component';
import { RembolsoModule } from '../rembolso/rembolso.module';
import { DetailedFormModule } from '../detailed-form/detailed-form.module';



@NgModule({
  declarations: [
    ReservationsListComponent
  ],
  imports: [
    CommonModule,
    RembolsoModule,
    DetailedFormModule,
  ],
  exports:[
    ReservationsListComponent
  ]
})
export class ReservationsListModule { }
