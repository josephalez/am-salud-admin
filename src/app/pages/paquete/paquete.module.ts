import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaqueteComponent } from './paquete.component';
import { PaqueteTableComponent } from './paquete-table/paquete-table.component';
import { PaqueteCreateComponent } from './paquete-create/paquete-create.component';
import { PaqueteEditComponent } from './paquete-edit/paquete-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
    {
        path: '',
        component: PaqueteComponent
    }
];

@NgModule({
    declarations: [PaqueteComponent, PaqueteTableComponent, PaqueteCreateComponent, PaqueteEditComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        LayoutModule,
        RouterModule.forChild(routes)
    ]
})
export class PaqueteModule { }
