import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyReservationsComponent } from './my-reservations.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from '../../components/calendar/calendar.module';

const routes:Routes=[
  {
    component:MyReservationsComponent,
    path:'',
  }
];

@NgModule({
  declarations: [
    MyReservationsComponent,
  ],
  imports: [
    CommonModule,
    CalendarModule,
    LayoutModule,
    RouterModule.forChild(routes),
  ]
})
export class MyReservationsModule { }
