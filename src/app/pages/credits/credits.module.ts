import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechargeCreditModule } from '../../components/recharge-credit/recharge-credit.module';
import { RouterModule, Routes } from '@angular/router';
import { CreditsComponent } from './credits.component';
import { UsersTableModule } from '../../components/users-table/users-table.module';
import { LayoutModule } from '../../components/layout/layout.module';

const routes:Routes=[
  {
    path:'',
    component:CreditsComponent
  }
]

@NgModule({
  declarations: [
    CreditsComponent
  ],
  imports: [
    UsersTableModule,
    LayoutModule,
    CommonModule,
    RechargeCreditModule,
    RouterModule.forChild(routes),
  ]
})
export class CreditsModule { }
