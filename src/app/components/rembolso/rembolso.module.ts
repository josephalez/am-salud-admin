import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RembolsoComponent } from './rembolso.component';
import { AceptarComponent } from './aceptar/aceptar.component';



@NgModule({
  declarations: [
    RembolsoComponent,
    AceptarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RembolsoComponent
  ]
})
export class RembolsoModule { }
