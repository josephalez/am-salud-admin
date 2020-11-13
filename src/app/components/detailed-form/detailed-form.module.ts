import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedFormComponent } from './detailed-form.component';



@NgModule({
  declarations: [
    DetailedFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DetailedFormComponent
  ]
})
export class DetailedFormModule { }
