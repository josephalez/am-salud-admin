import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExpedientsComponent } from './expedients.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { ExpedientsTableModule } from '../../components/expedients-table/expedients-table.module';

const routes:Routes=[
  {
    path:'',
    component:ExpedientsComponent,
  }
]

@NgModule({
  declarations: [
    ExpedientsComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ExpedientsTableModule,
    RouterModule.forChild(routes),
  ]
})
export class ExpedientsModule { }
