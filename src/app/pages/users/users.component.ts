import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { AlertService } from '../../services/notifications/alert.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:any[]=[];
  currentPage=1;
  lastPage=1;

  constructor(
    private userService:UserService,
    private alertService:AlertService,
  ) { }

  ngOnInit() {
    this.fetchUsersList();
  }

  async fetchUsersList(page=this.currentPage){
    try {
      let req= await this.userService.getUsers(page);
      console.log(req);
      this.currentPage=req.current_page;
      this.lastPage=req.last_page;
      this.users=req.data;
    } catch (err) {
     this.alertService.alertError('Error al recibir la lista de usuarios');
    }
  }

}
