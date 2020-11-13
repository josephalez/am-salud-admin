import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScheduleService } from '../../services/schedule/schedule.service';
import { AlertService } from '../../services/notifications/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.scss']
})
export class EditScheduleComponent implements OnInit {

  @Output() successEdit:any=new EventEmitter();
  
  @Input() set hour(value:any){
    if(value){
      this.scheduleForm.patchValue(value);
    }
  }

  @Input() set day(value:any){
    console.log("selected day",value)
    if(value){
      this.name=value.name;
      this.daynumber=value.number;
    }
  }

  hours:string[]=[
    "00:00","00:30","01:00","01:30","02:00","00:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00",
    "06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30",
    "13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00",
    "19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30",
  ];

  scheduleForm:FormGroup;

  daynumber:number=null;
  name:string="";

  constructor(
    private scheduleService:ScheduleService,
    private alertService:AlertService,
    private formBuilder:FormBuilder
  ) {
    this.scheduleForm=this.formBuilder.group({
      start_hour:[null,Validators.required],
      finish_hour:[null,Validators.required],
    })
  }

  ngOnInit() {
  }

  async submitSchedule(){
    try {
      let {daynumber}=this;
      let req= await this.scheduleService.submitHour({...this.scheduleForm.value,day:daynumber})
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
