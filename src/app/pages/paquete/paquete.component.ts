import { Component, OnInit } from '@angular/core';
import { PaqueteService } from 'src/app/services/paquete/paquete.service';
import { AlertService } from 'src/app/services/notifications/alert.service';

@Component({
    selector: 'app-paquete',
    templateUrl: './paquete.component.html',
    styleUrls: ['./paquete.component.scss']
})
export class PaqueteComponent implements OnInit {


    paquetes: any[] = [];
    currentPage = 1;
    lastPage = 1;

    constructor (
        private services: PaqueteService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        console.log("triggered console log")
        this.fetchZonesList();
    }

    async fetchZonesList(page = this.currentPage) {
        try {
            let req = await this.services.fetchLaserZones(page);
            console.log(req);
            this.currentPage = req.current_page;
            this.lastPage = req.last_page;
            this.paquetes = req.data;
        } catch (err) {
            this.alertService.alertError('Error al recibir la lista de zonas');
        }
    }


}
