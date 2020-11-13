import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCategoryComponent } from './edit-category.component';



@NgModule({
  declarations: [
    EditCategoryComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  exports:[
    EditCategoryComponent
  ]
})
export class EditCategoryModule { }
