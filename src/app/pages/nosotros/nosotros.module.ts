import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosCreateModule } from '../../components/nosotros-create/nosotros-create.module';
import { NosotrosTableModule } from '../../components/nosotros-table/nosotros-table.module';

const routes: Routes = [
  {
      path: '',
      component: NosotrosComponent
  }
];

@NgModule({
  declarations: [
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    NosotrosCreateModule,
    NosotrosTableModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class NosotrosModule { }
