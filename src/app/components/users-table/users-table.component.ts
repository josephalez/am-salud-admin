import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { UserService } from '../../services/user/user.service';
import { AlertService } from '../../services/notifications/alert.service';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  @Output() reload:any=new EventEmitter;
  @Output() emitUser:any=new EventEmitter;

  @Input() credit:boolean=false;
  @Input() users:any[]=[];

  constructor(
    private userService:UserService,
    private alertService:AlertService
  ) { }

  ngOnInit() {
  }

  getImage(index){

    let user= this.users[index];

    if(user.profile_picture){
      return AppSettings.apiUrl+'/'+user.profile_picture
    }
    else return '../../assets/img/default/user.png';
  }

  setUser(index){

    let user= this.users[index];

    this.emitUser.emit(user);

  }
  
  async delete(id:number){
    try {
      let req= await this.userService.deleteUser(id);
      console.log(req)
      this.alertService.alertSuccess("Usuario eliminado");
      this.reload.emit("reload");
    } catch (error) {
      console.log(error)
      this.alertService.alertError('Error al eliminar el usuario')
    }
  }

}
