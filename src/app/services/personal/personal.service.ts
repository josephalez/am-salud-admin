import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';
import { WorkerSubmitDto } from '../../schemas/worker-submit.dto';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(
    private connectionService:ConnectionService
  ) { }

  registerWorker(params:WorkerSubmitDto){
    return this.connectionService.postUrl("workers",params);
  }

  addedWorkers(){
    return this.connectionService.getUrl("workers");
  }

  fetchWorkers(page:number=1, service:number=1):Promise<any>{
    return this.connectionService.getUrl('members/'+service+'?page='+page);
  }

}
