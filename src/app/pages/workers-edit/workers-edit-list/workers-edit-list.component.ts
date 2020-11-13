import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-workers-edit-list',
  templateUrl: './workers-edit-list.component.html',
  styleUrls: ['./workers-edit-list.component.scss']
})
export class WorkersEditListComponent implements OnInit {

  @Input() users:any[]=[];

  selectedWorker:any=null;

  @Output() reload:any=new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  selectWorker(index:number){
    
    let worker= this.users[index];

    this.selectedWorker = worker

  }

  reloadFinish(){
    this.reload.emit('');
  }

}
