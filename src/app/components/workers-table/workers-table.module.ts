import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersTableComponent } from './workers-table.component';



@NgModule({
  declarations: [
    WorkersTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WorkersTableComponent
  ]
})
export class WorkersTableModule { }
