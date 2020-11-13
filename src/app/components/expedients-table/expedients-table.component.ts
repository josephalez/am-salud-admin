import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppSettings } from '../../app.settings';

@Component({
  selector: 'expedients-table',
  templateUrl: './expedients-table.component.html',
  styleUrls: ['./expedients-table.component.scss']
})
export class ExpedientsTableComponent implements OnInit {

  @Input() users:any=[]

  @Input() assistance:boolean=false;

  @Input() isSession:boolean=false;

  @Input() isExpedient:boolean=false;

  @Output() reload:any=new EventEmitter;

  selectedReservations:any[];

  constructor() { }

  ngOnInit() {
  }

  selectUser(index:number){

    let user= this.users[index];

    this.selectedReservations= user.reservations;

  }

   getImage(index:number){

    let users= this.users[index];

    if(users.profile_picture){
      return AppSettings.apiUrl+'/'+users.profile_picture
    }
    else return '../../assets/img/default/user.png';
  }

  emitReload(){
    this.reload.emit('success');
  }

}
