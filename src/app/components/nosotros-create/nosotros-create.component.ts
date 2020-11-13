import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WorkersService } from '../../services/workers/workers.service';
import { AlertService } from '../../services/notifications/alert.service';

@Component({
  selector: 'app-nosotros-create',
  templateUrl: './nosotros-create.component.html',
  styleUrls: ['./nosotros-create.component.scss']
})
export class NosotrosCreateComponent implements OnInit {

  @Output() reload:any=new EventEmitter;

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

      for(let key in this.workerForm.value){
        updateUserFormData.append(key,this.workerForm.value[key]);        
      }

      if(this.selctedImg) updateUserFormData.append("profile_picture", this.selctedImg);
            
      let req = await this.workerService.nosotrosStore(updateUserFormData);

      console.log(req);

      this.reload.emit('');

      this.alertService.alertSuccess(req.message);

      this.workerForm.patchValue({
        name:'',
        office:'',
        description:'',
        instagram:'',
      })

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
