import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreLaserZoneComponent } from './store-laser-zone.component';



@NgModule({
  declarations: [
    StoreLaserZoneComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    StoreLaserZoneComponent
  ]
})
export class StoreLaserZoneModule { }
