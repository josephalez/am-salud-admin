import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersEditListComponent } from './workers-edit-list/workers-edit-list.component';
import { WorkersEditComponent } from './workers-edit.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';
import { EditWorkerModule } from '../../components/edit-worker/edit-worker.module';

const routes:Routes=[
  {
    path:'',
    component:WorkersEditComponent,
  }
]

@NgModule({
  declarations: [WorkersEditListComponent, WorkersEditComponent],
  imports: [
    CommonModule,
    EditWorkerModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class WorkersEditModule { }
