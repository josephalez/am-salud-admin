import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../../services/workers/workers.service';
import { AlertService } from '../../services/notifications/alert.service';

@Component({
  selector: 'app-workers-edit',
  templateUrl: './workers-edit.component.html',
  styleUrls: ['./workers-edit.component.scss']
})
export class WorkersEditComponent implements OnInit {
  
  users: any[] = [];
  currentPage = 1;
  lastPage = 1;

  constructor (
      private userService: WorkersService,
      private alertService: AlertService,
  ) { }

  ngOnInit() {
      this.fetchUsersList();
  }

  async fetchUsersList(page = this.currentPage) {
      try {
          let req = await this.userService.getUsers(page);
          console.log(req);
          this.currentPage = req.current_page;
          this.lastPage = req.last_page;
          this.users = req.data;
      } catch (err) {
          console.log(err);
          this.alertService.alertError('Error al recibir la lista de usuarios');
      }
  }

}
