import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../services/schedule/schedule.service';
import { AlertService } from '../../services/notifications/alert.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PricesService } from '../../services/prices/prices.service';
import { isArray } from 'util';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  selectedHour: any = null;
  selectedDay: any = null;

  days: any[] = [
    { name: "Lunes", number: 1 },
    { name: "Martes", number: 2 },
    { name: "Miércoles", number: 3 },
    { name: "Jueves", number: 4 },
    { name: "Viernes", number: 5 },
    { name: "Sábado", number: 6 },
    { name: "Domingo", number: 7 },
  ];

  area: any = null;

  hours: any[] = [];

  workerPriceForm: FormGroup;

  constructor (
    private scheduleService: ScheduleService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private priceService: PricesService,
  ) {
    this.workerPriceForm = this.formBuilder.group({
      tarifa: [null, Validators.required],
      minutes: [null, Validators.required],
      tarifa_primera: [null],
      minutes_primera: [null],
    });
  }

  async ngOnInit() {
    this.route.params.subscribe(async () => {
      this.area = await localStorage.getItem('area');
      await this.joinDays();
      await this.fetchSchedules();
    });
    this.getprice();
  }

  async getprice() {
    const rest = await this.priceService.getWorkerPrice();
    console.log(rest);
    if (rest) {
      this.workerPriceForm.patchValue(rest);
      /*
      this.workerPriceForm.get('tarifa').setValue(parseInt(rest.tarifa));
      this.workerPriceForm.get('minutes').setValue(parseInt(rest.minutes));
      */
    }
  }

  async reload() {
    await this.joinDays();
    await this.fetchSchedules();
  }

  async storeWorkerPrice() {

    if (this.workerPriceForm.invalid) {
      this.alertService.alertError("Rellene todos los campos");
      return;
    }

    try {

      let req = await this.priceService.storeWorkerPrice(this.workerPriceForm.value);

      console.log(req);

      this.alertService.alertSuccess(req.message);

    } catch (error) {

      console.log(error);

      this.alertService.alertError('Error al actualizar los datos, revise los campos nuevamente');

    }

  }

  async cleanDay(daynumber: number) {
    try {
      let req = await this.scheduleService.removeHours(daynumber);
      console.log("req", req)
      this.alertService.alertSuccess(req.message);
      await this.fetchSchedules();
    } catch (err) {
      this.alertService.alertError(err.error.error);
    }

  }

  async getStartHour(daynumber: number) {
    let hour = await this.hours.find(h => h.day == daynumber);
    let hourLabel = hour ? hour.start_hour : 'No establecida';
    return hourLabel;
  }

  async getFinishHour(daynumber: number) {
    let hour = await this.hours.find(h => h.day == daynumber);
    let hourLabel = hour ? hour.finish_hour : 'No establecida';
    return hourLabel;
  }

  async selectDay(daynumber: number) {

    let day = await this.days.find(d => d.number === daynumber);

    this.selectedDay = day ? day : null;

    let hour = await this.hours.find(h => h.day === daynumber);

    this.selectedHour = hour ? hour : null;

  }

  async fetchSchedules() {
    let schedules = await this.scheduleService.getSchedules();
    console.log('schedules', schedules)
    if(schedules && isArray(schedules)){
      this.hours = schedules;
      this.joinDays();
    }
  }

  async joinDays() {
    this.days.map(async (day, index) => {
      this.days[index].start = await this.getStartHour(day.number);
      this.days[index].end = await this.getFinishHour(day.number);
    });
  }

}
