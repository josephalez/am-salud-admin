import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServsService } from '../../services/servs-service/servs-service.service';
import { AlertService } from '../../services/notifications/alert.service';

@Component({
  selector: 'new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.scss']
})
export class NewServiceComponent implements OnInit {

  @Output() newSuccess:any=new EventEmitter();

  name:string="";
  description:string="";

  constructor(
    private servService:ServsService,
    private alertService:AlertService,
  ) { }

  ngOnInit() {
  }

  async createService(){

    let {name,description}=this;

    if(name==''||description==''){
      this.alertService.alertError("Rellene todos los campos");
      return;
    }
    
    try {
      let req = await this.servService.newService({name,description});
      console.log(req);
      this.alertService.alertSuccess(req.message);
      this.newSuccess.emit("success");
      this.name=''; this.description='';
    } catch (err) {
      console.log(err);
      if(err.status==422){
        for(let errorIndex in err.error){
          err.error[errorIndex].map(errorMessage=>this.alertService.alertError(errorMessage))
        }
      }
      else{
        this.alertService.alertError(err.error.error);
      }
    }

  }



}
