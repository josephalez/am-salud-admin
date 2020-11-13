import { Component, OnInit } from '@angular/core';
import { WorkersService } from 'src/app/services/workers/workers.service';
import { AlertService } from 'src/app/services/notifications/alert.service';

@Component({
    selector: 'app-workers',
    templateUrl: './workers.component.html',
    styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {
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
            console.log("algo");
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
