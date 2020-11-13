import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { AlertService } from 'src/app/services/notifications/alert.service';
import { AppSettings } from 'src/app/app.settings';

@Component({
    selector: 'app-list-workers',
    templateUrl: './list-workers.component.html',
    styleUrls: ['./list-workers.component.scss']
})
export class ListWorkersComponent implements OnInit {
    @Input() users: any[];
    @Output() reload: any = new EventEmitter;
    constructor (
        private userService: UserService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        console.log(this.users);
    }

    getImage(index) {

        let user = this.users[index];

        if (user.profile_picture) {
            return AppSettings.apiUrl + '/' + user.profile_picture
        }
        else return '../../assets/img/default/user.png';
    }

    async delete(id: number) {
        try {
            let req = await this.userService.deleteUser(id);
            console.log(req)
            this.alertService.alertSuccess("Usuario eliminado");
            this.reload.emit("reload");
        } catch (error) {
            console.log(error)
            this.alertService.alertError('Error al eliminar el usuario')
        }
    }

}
