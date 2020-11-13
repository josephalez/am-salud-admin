import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaserZonesTableModule } from '../../components/laser-zones-table/laser-zones-table.module';
import { Routes, RouterModule } from '@angular/router';
import { LaserZonesComponent } from './laser-zones.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { StoreLaserZoneModule } from '../../components/store-laser-zone/store-laser-zone.module';

const routes:Routes=[
  {
    path:'',
    component:LaserZonesComponent
  }
];

@NgModule({
  declarations: [
    LaserZonesComponent
  ],
  imports: [
    CommonModule,
    LaserZonesTableModule,
    StoreLaserZoneModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class LaserZonesModule { }
