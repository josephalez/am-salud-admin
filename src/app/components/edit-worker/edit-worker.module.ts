import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditWorkerComponent } from './edit-worker.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditWorkerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    EditWorkerComponent
  ]
})
export class EditWorkerModule { }
