import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { AlertService } from '../../services/notifications/alert.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppSettings } from '../../app.settings';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkersService } from '../../services/workers/workers.service';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.scss']
})
export class EditWorkerComponent implements OnInit {

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
    private authService:AuthService,
    private alertService:AlertService,
    private workerService:WorkersService,
    private dom:DomSanitizer,
    private formBuilder:FormBuilder,
  ) {
    this.workerForm=this.formBuilder.group({
      name:['',Validators.required],
      last_name:[''],
      phone:[''],
      gender:['', Validators.required],
      instagram:[''],
      description:[''],
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
      this.alertService.alertError("Los campos nombre y género son obligatorios");
      return;
    }

    try {
      let updateUserFormData= new FormData();

      updateUserFormData.append("_method","put");

      for(let key in this.workerForm.value){
        updateUserFormData.append(key,this.workerForm.value[key]);        
      }

      if(this.selctedImg) updateUserFormData.append("profile_picture", this.selctedImg);
            
      let req = await this.workerService.updateWorker(updateUserFormData, this.workerId);

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
