import { Component, OnInit } from '@angular/core';
import { ServsService } from '../../services/servs-service/servs-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services:any[]=[];

  selectedService:any=null;

  constructor(
    private servService:ServsService
  ) { }

  async ngOnInit() {
    await this.refreshServices()
  }

  async selectService(index){
    this.selectedService=this.services[index];
  }

  async deleteService(index){
    await this.selectService(index);
    let req=await this.servService.deleteService(this.selectedService.id);
    console.log("request",req);
  }

  async refreshServices(){
    this.services = await this.servService.fetchServices();
    console.log(this.services);
  }

}
