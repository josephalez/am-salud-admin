import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../components/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  {
    component:ProfileComponent,
    path:''
  }
]

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ProfilePageModule { }
