import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StoreLaserZoneDto } from '../../schemas/store-lazer-zone.dto';
import * as moment from "moment";
import { LaserZonesService } from '../../services/laser-zones/laser-zones.service';
import { AlertService } from '../../services/notifications/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'store-laser-zone',
    templateUrl: './store-laser-zone.component.html',
    styleUrls: ['./store-laser-zone.component.scss']
})
export class StoreLaserZoneComponent implements OnInit {

    @Output() reload: any = new EventEmitter;

    laserZone: FormGroup;

    MinutesArray = Array(59).fill(1).map((el, index) => el + index);

    constructor (
        private laserZoneService: LaserZonesService,
        private alertService: AlertService,
        private formBuilder: FormBuilder
    ) {
        this.laserZone = this.formBuilder.group({
            name: ["", Validators.required],
            completo: [0, Validators.required],
            retoque: [0, Validators.required],
            time_completo: [null, Validators.required],
            time_retoque: [null, Validators.required],
        });
    }

    ngOnInit() {
        console.log('minutes array', this.MinutesArray)
    }

    async addLaserZone() {
        try {
            if (this.laserZone.invalid) {
                this.alertService.alertError("Rellene todos los campos");
                return;
            }
            let req = await this.laserZoneService.addLaserZone(this.laserZone.value);
            console.log(req);
            this.reload.emit('reload');
        } catch (err) {
            console.log("error", err)
        }
    }
    getParsedMinutes(minutes: number) {
        return moment().minutes(minutes).format('mm:00');
    }
}
