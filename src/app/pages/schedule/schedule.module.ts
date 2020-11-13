import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../components/layout/layout.module';
import { EditScheduleModule } from '../../components/edit-schedule/edit-schedule.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[
  {
    path:'',
    component:ScheduleComponent
  }
]


@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    EditScheduleModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class SchedulePageModule { }
