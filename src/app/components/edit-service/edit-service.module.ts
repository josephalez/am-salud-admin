import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditServiceComponent } from './edit-service.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EditServiceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    EditServiceComponent
  ],
})
export class EditServiceModule { }
