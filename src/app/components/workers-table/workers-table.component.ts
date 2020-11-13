import { Component, OnInit, Input } from '@angular/core';
import { AppSettings } from '../../app.settings';

@Component({
  selector: 'workers-table',
  templateUrl: './workers-table.component.html',
  styleUrls: ['./workers-table.component.scss']
})
export class WorkersTableComponent implements OnInit {

  @Input() workers:any=[]

  constructor() { }

  ngOnInit() {
  }

   getImage(index){

    let worker= this.workers[index];

    if(worker.profile_picture){
      return AppSettings.apiUrl+'/'+worker.profile_picture
    }
    else return '../../assets/img/default/user.png';
  }


}
