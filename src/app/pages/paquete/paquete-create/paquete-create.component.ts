import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlertService } from 'src/app/services/notifications/alert.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PaqueteService } from 'src/app/services/paquete/paquete.service';

@Component({
    selector: 'app-paquete-create',
    templateUrl: './paquete-create.component.html',
    styleUrls: ['./paquete-create.component.scss']
})
export class PaqueteCreateComponent implements OnInit {
    @Output() reload: any = new EventEmitter;
    laserZone: FormGroup;
    monedas:any[]=[];
    constructor (
        private services: PaqueteService,
        private alertService: AlertService,
        private formBuilder: FormBuilder
    ) {
        this.laserZone = this.formBuilder.group({
            nombre: ["", Validators.required],
            credit_id: ["", Validators.required],
            bonus: ["", Validators.required],
            points: ["", Validators.required],
        });
    }

    ngOnInit() {
        this.services.getAllMoneda().then((res) => {
            console.log(res);
            this.monedas = res["data"];
        });
    }

    enviar() {
        console.log("si");
        console.log(this.laserZone.value);
        this.services.insert(this.laserZone.value).then((res) => {
            console.log(res);
            this.reload.emit();
            this.laserZone.reset();
        }).catch((e) => {
            console.log(e)
        });
    }

}
