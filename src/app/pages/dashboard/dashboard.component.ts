import { Component, OnInit, ElementRef } from '@angular/core';
import { PersonalService } from '../../services/personal/personal.service';
import { AlertService } from '../../services/notifications/alert.service';
import { Chart } from 'chart.js'
import { GraphicsService } from '../../services/graphics/graphics.service';

import * as moment from 'moment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  members:any[]=[];

  isWorker:boolean=false;

  chartNutricion:any=null;
  chartLaserClinic:any=null;
  chartReservations:any=null;
  chartReservationsConfirmed:any=null;
  chartReservationsCanceled:any=null;
  chartNutricionVentas:any=null;
  chartLaserClinicVentas:any=null;
  chartNutricionVentasWorker:any=null;
  chartLaserClinicVentasWorker:any=null;

  constructor(
    private personalService:PersonalService,
    private alertService:AlertService,
    private graficaService:GraphicsService,
  ) { }

  async ngOnInit() {  

    let role= await localStorage.getItem("role");
    if(role!="worker") this.isWorker=false;
    else this.isWorker=true;

    /*
    if(!this.isWorker) this.personalService.addedWorkers()
    .then((res:any)=>{
      console.log("response",res);
      this.members=res;
    }).catch(err=>{
      console.log("error",err);
      this.alertService.alertError("error al cargar personal")
    });
    */

    setTimeout(async () => {
      await this.createCharts();
    }, 2000);
  }

  async createCharts(){
    try {
      if(!this.isWorker){
        let req= await this.graficaService.admin()
        console.log(req);
        let nutricion= [];
        if(req.data.general&&req.data.general.length) nutricion= await req.data.general.filter(el=>el.servicio_id==1);
        let laser= [];
        if(req.data.general&&req.data.general.length) laser= await req.data.general.filter(el=>el.servicio_id==2);
        this.chartNutricion= await this.createChart('grafica-nutricion', nutricion);
        this.chartLaserClinic= await this.createChart("grafica-laser-clinic", laser);
        
        let nutricionVentas= [];
        if(req.data.ventas&&req.data.ventas.length) nutricionVentas= await req.data.ventas.filter(el=>el.servicio_id==1);
        let laserVentas= [];
        if(req.data.ventas&&req.data.ventas.length) laserVentas= await req.data.ventas.filter(el=>el.servicio_id==2);
        this.chartNutricionVentas= await this.createChart('grafica-nutricion-ventas', nutricionVentas);
        this.chartLaserClinicVentas= await this.createChart("grafica-laser-clinic-ventas", laserVentas);

        let nutricionVentasEmpleados= [];
        if(req.data.workers&&req.data.workers.length) nutricionVentasEmpleados= await req.data.workers.filter(el=>el.servicio_id==1);
        let laserVentasEmpleados= [];
        if(req.data.workers&&req.data.workers.length) laserVentasEmpleados= await req.data.workers.filter(el=>el.servicio_id==2);
        this.chartNutricionVentasWorker= await this.createChart("grafica-nutricion-ventas-personal", nutricionVentasEmpleados, true);
        this.chartLaserClinicVentasWorker= await this.createChart('grafica-laser-clinic-ventas-personal', laserVentasEmpleados, true);
        
        this.chartReservationsConfirmed= await this.createChart('grafica-reservas-confirmadas', req.data.confirmadas);
        this.chartReservationsCanceled= await this.createChart('grafica-reservas-canceladas', req.data.canceladas);
      }
      else{
        let req= await this.graficaService.worker()
        console.log(req);
          
        this.chartReservations= await this.createChart('grafica-reservas', req.data.general);
          
        this.chartReservationsConfirmed= await this.createChart('grafica-reservas-confirmadas', req.data.confirmadas);
  
        this.chartReservationsCanceled= await this.createChart('grafica-reservas-canceladas', req.data.canceladas);
  
        this.chartNutricionVentas= await this.createChart('grafica-tus-ventas', req.data.ventas)

      }
      
    } catch (error) {
      
      console.log(error);

    }
  }

  async createChart(chartId:string, data:any=null, personal=false){
    let grafica= document.getElementById(chartId);
    
    console.log('new chart', grafica)
    //data será los resultados de las consultas
    let months=[''];
    let count=[0];

    let labelShow= 'Total del mes';

    if(personal){
      labelShow= "Total ventas por empleados";
      if(data&&data.length){
        await data.map(el=>{
          months.push(el.workerName)
          count.push(el.total);
        });
      }
    }

    else if(data&&data.length) await data.slice(0,4).reverse().map(el=>{
      months.push(moment().locale('es').month((el.mes)-1).format('MMMM'));
      count.push(el.total);
    })

    return new Chart(grafica, {
      type: 'line',
      data: {
          labels: months,//esto se reemplaza con los datos en data
          datasets: [{
              label: labelShow,
              data: count,//esto se reemplaza con los datos en data
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
              ],
              borderColor: [
                'rgba(175, 89, 102, 1)',        
                'rgba(54, 162, 235, 1)',       
                'rgba(54, 162, 235, 1)',         
                'rgba(54, 162, 235, 1)',         
                'rgba(54, 162, 235, 1)',         
                'rgba(54, 162, 235, 1)',         
                'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive:true,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
    });
  }


}
