import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NewServiceComponent } from './new-service.component';

@NgModule({
  declarations: [
    NewServiceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    NewServiceComponent
  ],
})

export class NewServiceModule { }
