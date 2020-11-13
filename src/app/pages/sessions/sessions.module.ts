import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SessionsComponent } from './sessions.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { ExpedientsTableModule } from '../../components/expedients-table/expedients-table.module';

const routes:Routes=[
  {
    path:'',
    component:SessionsComponent,
  }
]

@NgModule({
  declarations: [
    SessionsComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ExpedientsTableModule,
    RouterModule.forChild(routes),
  ]
})
export class SessionsModule { }
