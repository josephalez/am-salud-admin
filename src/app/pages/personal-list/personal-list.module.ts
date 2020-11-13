import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersTableModule } from '../../components/workers-table/workers-table.module';
import { LayoutModule } from '../../components/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';
import { PersonalListComponent } from './personal-list.component';


const routes:Routes=[
  {
    path:'',
    component:PersonalListComponent,
  }
]

@NgModule({
  declarations: [
    PersonalListComponent,
  ],
  imports: [
    CommonModule,
    WorkersTableModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class PersonalListModule { }
