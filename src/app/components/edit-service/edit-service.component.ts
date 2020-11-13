import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServsService } from '../../services/servs-service/servs-service.service';
import { AlertService } from '../../services/notifications/alert.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})
export class EditServiceComponent implements OnInit {

  @Input() set service(value:any){
    if(value){
      this.editServiceForm.patchValue(value)
    }
  }

  @Output() successEdit:any=new EventEmitter();

  editServiceForm:FormGroup;

  constructor(
    private servService:ServsService,
    private alertService:AlertService,
    private formBuilder:FormBuilder,
  ) {
    this.editServiceForm=this.formBuilder.group({
      name:"",
      description:"",
      id:0,
    })
  }

  ngOnInit() {
  }

  async updateService(){
    try {
      let req= await this.servService.updateService(this.editServiceForm.value);
      console.log(req);
      this.alertService.alertSuccess(req.message);
      this.successEdit.emit("success");
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
