import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosCreateComponent } from './nosotros-create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NosotrosCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    NosotrosCreateComponent,
  ]
})
export class NosotrosCreateModule { }
