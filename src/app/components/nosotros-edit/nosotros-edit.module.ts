import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosEditComponent } from './nosotros-edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NosotrosEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    NosotrosEditComponent,
  ]
})
export class NosotrosEditModule { }
