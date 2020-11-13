import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersComponent } from './workers.component';
import { RouterModule, Routes } from '@angular/router';
import { ListWorkersComponent } from './list-workers/list-workers.component';
import { LayoutModule } from 'src/app/components/layout/layout.module';

const routes: Routes = [
    {
        path: '',
        component: WorkersComponent
    }
]


@NgModule({
    declarations: [WorkersComponent, ListWorkersComponent],
    imports: [
        CommonModule,
        LayoutModule,
        RouterModule.forChild(routes)
    ]
})
export class WorkersModule { }
