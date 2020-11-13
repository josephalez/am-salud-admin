import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../services/notifications/alert.service';
import { WorkersService } from '../../services/workers/workers.service';
import { AppSettings } from '../../app.settings';

@Component({
  selector: 'app-nosotros-edit',
  templateUrl: './nosotros-edit.component.html',
  styleUrls: ['./nosotros-edit.component.scss']
})
export class NosotrosEditComponent implements OnInit {

  
  @Input() set user(value){
    if(value){
      if(value.profile_picture) this.profile_picture=value.profile_picture;
      this.workerForm.patchValue(value);
      this.workerId=value.id;
    }
  }

  @Output() reload:any=new EventEmitter;

  workerId:any=null;
  profile_picture:string='';
  preview:SafeResourceUrl="";

  selctedImg:any=null;

  workerForm:FormGroup;

  constructor(
    private alertService:AlertService,
    private workerService:WorkersService,
    private dom:DomSanitizer,
    private formBuilder:FormBuilder,
  ) {
    this.workerForm=this.formBuilder.group({
      name:['',Validators.required],
      office:['', Validators.required],
      description:[''],
      instagram:[''],
    })
  }

  async ngOnInit() {}

  getImage(){
    if(this.profile_picture){
      return AppSettings.apiUrl+'/'+this.profile_picture
    }
    else if(this.preview){
      return this.preview;
    }
    else return '../../assets/img/default/user.png';
  }

  onImageChange(files:FileList){
    let file= files.item(0);
    console.log(file);
    let allowedImgs=["image/jpeg", "image/png"]
    if(allowedImgs.indexOf(file.type)==-1){
      this.alertService.alertError("Asegúrese de subir una imagen válida");
      return;
    }
    this.preview= this.dom.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
    this. selctedImg=file;
  }

  async submitUpload(){

    if(this.workerForm.invalid){
      this.alertService.alertError("Los campos nombre y cargo son obligatorios");
      return;
    }

    try {
      let updateUserFormData= new FormData();

      updateUserFormData.append("_method","put");

      for(let key in this.workerForm.value){
        updateUserFormData.append(key,this.workerForm.value[key]);        
      }

      if(this.selctedImg) updateUserFormData.append("profile_picture", this.selctedImg);
            
      let req = await this.workerService.nosotrosEdit(updateUserFormData, this.workerId);

      console.log(req);

      this.reload.emit('');

      this.alertService.alertSuccess(req.message);

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
