import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AssistanceComponent } from './assistance.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { ExpedientsTableModule } from '../../components/expedients-table/expedients-table.module';

const routes:Routes=[
  {
    path:'',
    component:AssistanceComponent,
  }
]

@NgModule({
  declarations: [
    AssistanceComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ExpedientsTableModule,
    RouterModule.forChild(routes),
  ]
})
export class AssistanceModule { }
