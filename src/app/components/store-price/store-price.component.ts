import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../services/notifications/alert.service';
import { PricesService } from '../../services/prices/prices.service';
import { ServsService } from '../../services/servs-service/servs-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'store-price',
  templateUrl: './store-price.component.html',
  styleUrls: ['./store-price.component.scss']
})
export class StorePriceComponent implements OnInit {

  @Input() users:any[]=[];

  userId:number=null;

  services:any[]=[];

  isWorker:boolean=false;
  
  priceForm:FormGroup;

  is_general:boolean=true;
  is_user:boolean=false;

  success:any=new EventEmitter;

  constructor(
    private formBuilder:FormBuilder,
    private alertService:AlertService,
    private priceService:PricesService,
    private servService:ServsService,
    private route:ActivatedRoute,
  ) {
    this.priceForm= this.formBuilder.group({
      price:[0,Validators.required],
      service:[null, Validators.required],
      user:[null]
    });
  }

  async ngOnInit() {
    this.route.params.subscribe(async ()=>{
      let role= await localStorage.getItem("role");
      if(role!="worker") this.isWorker=false;
      else this.isWorker=true;
      await this.fetchServices()
    })
  }

  setMode(isUser:boolean=false){
    if(isUser){
      this.is_user=true;
      this.is_general=false;
    }
    else{
      this.is_user=false;
      this.is_general=true;
      this.priceForm.patchValue({user:null});
    }
  }

  async fetchServices(){
    try {
      
      let req= await this.servService.fetchServices();

      console.log(req);

      this.services=req;

    } catch (error) {
      console.log(error)
    }
  }

  async storePrice(){
    try {
     
      if(this.priceForm.invalid){
        this.alertService.alertError('Rellene todos los campos');
        return;
      }

      let req= await this.priceService.storeSpecialPrice(this.priceForm.value);

      console.log(req);

      this.success.emit('ok');

      this.alertService.alertSuccess("Precio especial añadido exitosamente")

    } catch (error) {
      console.log(error);
      this.alertService.alertError('Error al añadir precio especial')
    }
  }

}
