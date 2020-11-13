import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechargeCreditComponent } from './recharge-credit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RechargeCreditComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[
    RechargeCreditComponent
  ]
})
export class RechargeCreditModule { }
