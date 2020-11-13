import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesTableModule } from '../../components/categories-table/categories-table.module';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { StoreCategoryModule } from '../../components/store-category/store-category.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCategoryModule } from '../../components/edit-category/edit-category.module';

const routes:Routes=[
  {
    path:'',
    component:CategoriesComponent,
  }
]

@NgModule({
  declarations: [
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    CategoriesTableModule,
    EditCategoryModule,
    StoreCategoryModule,
    RouterModule.forChild(routes),
  ]
})
export class CategoriesModule { }
