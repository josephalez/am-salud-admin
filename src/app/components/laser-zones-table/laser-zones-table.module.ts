import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaserZonesTableComponent } from './laser-zones-table.component';



@NgModule({
  declarations: [
    LaserZonesTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LaserZonesTableComponent
  ]
})
export class LaserZonesTableModule { }
