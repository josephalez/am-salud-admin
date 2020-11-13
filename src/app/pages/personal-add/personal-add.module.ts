import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PersonalAddComponent } from './personal-add.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { LayoutModule } from '../../components/layout/layout.module';



const routes:Routes=[
  {
    path:'',
    component: PersonalAddComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,    
    RouterModule.forChild(routes)
  ],
  declarations: [
    PersonalAddComponent,
  ]
})
export class PersonalAddModule { }
