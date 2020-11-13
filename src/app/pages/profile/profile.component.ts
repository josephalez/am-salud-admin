import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { AlertService } from '../../services/notifications/alert.service';
import { AppSettings } from '../../app.settings';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name:string='';
  last_name:string='';
  phone:string='';
  gender:string='';
  instagram:string='';
  profile_picture:string=null;
  description:string='';
  preview:SafeResourceUrl="";

  selctedImg:any=null;

  constructor(
    private authService:AuthService,
    private alertService:AlertService,
    private userService:UserService,
    private dom:DomSanitizer
  ) { }

  async ngOnInit() {
    await this.fetchMyData()
  }

  async fetchMyData(){
    try {
      
      let req = await this.authService.verifyToken();

      console.log('data', req.user);

      this.name= req.user.name;
      this.last_name= req.user.last_name;
      this.phone= req.user.phone;
      this.gender= req.user.gender;
      this.instagram= req.user.gender;
      this.profile_picture= req.user.profile_picture

    } catch (err) {
      this.alertService.alertError("Error al obtener los datos de usuario");
    }
  }

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
    let{
      name,last_name,gender,phone, instagram, description
    }=this;

    if(name==''||last_name==''||gender==''||phone==''){
      this.alertService.alertError("Rellene los campos de texto");
      return;
    }

    try {
      let updateUserFormData= new FormData();

      updateUserFormData.append("_method","put");

      updateUserFormData.append("name",name);
      updateUserFormData.append("last_name",last_name);
      updateUserFormData.append("gender",gender);
      updateUserFormData.append("phone",phone);
      updateUserFormData.append("instagram",instagram);
      updateUserFormData.append("description",description);

      if(this.selctedImg) updateUserFormData.append("profile_picture", this.selctedImg);
            
      let req = await this.userService.updateUser(updateUserFormData);

      console.log(req);

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
