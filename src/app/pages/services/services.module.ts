import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EditServiceModule } from '../../components/edit-service/edit-service.module';
import { ServicesComponent } from './services.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { NewServiceModule } from '../../components/new-service/new-service.module';

const routes:Routes=[
  {
    path:'',
    component:ServicesComponent,
  }
]

@NgModule({
  declarations: [
    ServicesComponent,
  ],
  imports: [
    CommonModule,
    EditServiceModule,
    NewServiceModule,
    LayoutModule,
    RouterModule.forChild(routes),
  ]
})
export class ServicesPageModule { }
