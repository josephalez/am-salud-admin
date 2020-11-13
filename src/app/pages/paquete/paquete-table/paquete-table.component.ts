import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AlertService } from 'src/app/services/notifications/alert.service';
import { PaqueteService } from 'src/app/services/paquete/paquete.service';

@Component({
    selector: 'app-paquete-table',
    templateUrl: './paquete-table.component.html',
    styleUrls: ['./paquete-table.component.scss']
})
export class PaqueteTableComponent implements OnInit {

    @Output() reload: any = new EventEmitter;
    @Input() paquetes: any[] = [];

    constructor (
        private service: PaqueteService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
    }

    getTotal(paquete:any){
        return parseFloat(paquete.points)+(paquete.points*(paquete.bonus/100))
    }

    async delete(id: number) {
        try {
            let req = {};//await this.laserZoneService.deleteLaserZone(id);
            console.log(req)
            this.alertService.alertSuccess("Zona eliminada");
            this.reload.emit("reload");
        } catch (error) {
            console.log(error)
            this.alertService.alertError('Error al eliminar la zona seleccionada')
        }
    }

    status(id, p) {
        const st = (p.status === 1 ? 0 : 1);

        this.service.update(id, { status: st })
            .then((res) => {
                console.log(res);
                p.status = st;
            })
            .catch((e) => {
                console.log(e);
            });
    }
}
