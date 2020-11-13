import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from '../../components/layout/layout.module';


const routes: Routes= [
  {
    path:'',
    component:DashboardComponent,
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardPageModule { }
