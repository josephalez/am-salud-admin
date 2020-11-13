import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosEditModule } from '../nosotros-edit/nosotros-edit.module';
import { NosotrosTableComponent } from './nosotros-table.component';



@NgModule({
  declarations: [
    NosotrosTableComponent,
  ],
  imports: [
    CommonModule,
    NosotrosEditModule,
  ],
  exports:[
    NosotrosTableComponent,
  ]
})
export class NosotrosTableModule { }
