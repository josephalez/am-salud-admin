import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/notifications/alert.service';
import { PersonalService } from '../../services/personal/personal.service';
import { ServsService } from '../../services/servs-service/servs-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $;

@Component({
    selector: 'app-personal-add',
    templateUrl: './personal-add.component.html',
    styleUrls: ['./personal-add.component.scss']
})
export class PersonalAddComponent implements OnInit {

    constructor (
        private alertService: AlertService,
        private personalService: PersonalService,
        private servService: ServsService,
        private formBuilder: FormBuilder,
    ) {
        this.addPersonal = this.formBuilder.group({
            name: ["", Validators.required],
            last_name: ["", Validators.required],
            phone: ["", Validators.required],
            description: ["", Validators.required],
            instagram:[null],                  
            email: ["", [Validators.required, Validators.email]],
            gender: [null, Validators.required],
            birthday: [null, Validators.required],
            address: ["", Validators.required],
            password: ["", [Validators.required, Validators.minLength(6)]],
            password_confirmation: ["", Validators.required],
            area: [null, Validators.required],
        });
    }

    get password() {
        return this.addPersonal.controls.password;
    }

    areas: any[] = [];

    addPersonal: FormGroup;

    ngOnInit() {

        $('#age-datepicker').datepicker().on("changeDate", (e) => {
            this.addPersonal.patchValue({ birthday: e.format() });//esta funcion debe hacerse manualmente
        });

        this.servService.fetchServices()
            .then(res => {
                console.log('response', res)
                this.areas = res;
            })
            .catch(err => {
                console.log('error', err);
                this.alertService.alertError("Error al obtener las áreas de trabajo")
            });
    }

    clear() {
        this.addPersonal.patchValue({
            name: "",
            description: "",
            last_name: "",
            phone: "",
            email: "",
            gender: null,
            birthday: null,
            instagram: null,            
            address: '',
            password: "",
            password_confirmation: "",
            area: null,
        });
    }

    register() {
        let error = false;

        if (this.addPersonal.invalid) {
            console.log('invalid params', this.addPersonal.value)
            this.alertService.alertError('Rellene todos los campos');
            error = true;
        }

        if (this.addPersonal.value.password !== this.addPersonal.value.password_confirmation) {
            this.alertService.alertError("Las contraseñas no coinciden");
            error = true;
        }
        if (this.addPersonal.controls.email.errors) {
            error = true;
            this.alertService.alertError('El correo electronico esta mal');
        }
        if (error) return;



        console.log(this.addPersonal.value);

        this.personalService.registerWorker(this.addPersonal.value).then((res: any) => {
            console.log(res)
            this.clear();
            this.alertService.alertSuccess(res.message);
        }).catch(err => {
            console.log(err);
            if (err.status == 422) {
                for (let errorIndex in err.error) {
                    err.error[errorIndex].map(errorMessage => this.alertService.alertError(errorMessage))
                }
            }
            else {
                this.alertService.alertError(err.error.error);
            }
        })


    }

}
