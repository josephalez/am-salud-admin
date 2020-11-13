import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';
import { SubmitScheduleDto } from '../../schemas/submit-schedule.dto';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(
    private connectionService:ConnectionService
  ) { }

  getSchedules():Promise<any>{
    return this.connectionService.getUrl('hours/get/mine');
  }

  submitHour(params:SubmitScheduleDto):Promise<any>{
    return this.connectionService.postUrl('hours',params);
  }

  removeHours(day:number):Promise<any>{
    console.log("deleting ", day)
    return this.connectionService.deleteUrl('hours/'+day);
  }

}
