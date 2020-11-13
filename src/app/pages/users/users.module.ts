import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { UsersTableModule } from '../../components/users-table/users-table.module';

const routes:Routes=[
  {
    path:'',
    component:UsersComponent,
  }
]

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersTableModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
