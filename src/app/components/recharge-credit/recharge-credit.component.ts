import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreditsService } from '../../services/credits/credits.service';
import { AlertService } from '../../services/notifications/alert.service';
import { PaqueteService } from '../../services/paquete/paquete.service';

@Component({
  selector: 'recharge-credit',
  templateUrl: './recharge-credit.component.html',
  styleUrls: ['./recharge-credit.component.scss']
})
export class RechargeCreditComponent implements OnInit {

  @Input() userId: number = null;

  @Input() credits: any[] = [];

  @Input() username: string = '';

  paquetes: any[] = [];

  balanceForm: FormGroup;

  constructor (
    private formBuilder: FormBuilder,
    private creditService: CreditsService,
    private alertService: AlertService,
    private paqueteService: PaqueteService
  ) {
    this.balanceForm = this.formBuilder.group({
      credit_id: ['', Validators.required],
      saldo: [0, Validators.required],
      paquete_id: ['', Validators.required],
      monto: [0, Validators.required],
    })
  }

  ngOnInit() {
  }

  async getPaquetes($event) {
    try {

      let req = await this.paqueteService.fetchAllPaquetes($event);

      this.paquetes = req.data;

    } catch (error) {

      this.alertService.alertError('Error al recibir lista de paquetes');

    }
  }

  async changePaquete(index) {

    let paquete = this.paquetes[index];

    this.balanceForm.patchValue({
      saldo: ((paquete.bonus * (paquete.points / 100)) + paquete.points * 1),
      monto: paquete.points,
      paquete_id: paquete.id,
    });

  }

  async storeBalance() {

    try {

      console.log(this.balanceForm.value);


      if (this.balanceForm.invalid) {
        await this.alertService.alertError('Rellene los campos corréctamente');
        return;
      }

      else {
        console.log(this.balanceForm.value);
        let req = await this.creditService.fetchPaquete({ ...this.balanceForm.value, user_id: this.userId });

        console.log(req);
        this.alertService.alertSuccess('El paquete se ha cargado al saldo del usuario')

        this.balanceForm.patchValue({
          credit_id: '',
          saldo: 0,
          paquete_id: '',
          monto: 0,
        })

      }

    } catch (error) {

      console.log(error)

      this.alertService.alertError('Error al añadir créditos');

      this.balanceForm.patchValue({
        credit_id: '',
        saldo: 0,
        paquete_id: '',
        monto: 0,
      })

    }

  }

}
