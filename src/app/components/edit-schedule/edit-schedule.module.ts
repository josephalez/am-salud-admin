import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditScheduleComponent } from './edit-schedule.component';

@NgModule({
  declarations: [
    EditScheduleComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    EditScheduleComponent
  ]
})
export class EditScheduleModule { }
