import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesTableComponent } from './categories-table.component';

@NgModule({
  declarations: [
    CategoriesTableComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CategoriesTableComponent
  ]
})
export class CategoriesTableModule { }
