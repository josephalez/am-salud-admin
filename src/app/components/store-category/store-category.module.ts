import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreCategoryComponent } from './store-category.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StoreCategoryComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    StoreCategoryComponent
  ]
})
export class StoreCategoryModule { }
