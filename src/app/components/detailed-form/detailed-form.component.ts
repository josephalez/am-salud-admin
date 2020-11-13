import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detailed-form',
  templateUrl: './detailed-form.component.html',
  styleUrls: ['./detailed-form.component.scss']
})
export class DetailedFormComponent implements OnInit {

  @Input() laserForm:any=null;

  constructor() { }

  ngOnInit() {
  }

  getParsedDate(date:any){

    if(!date) return 'No hay antecedentes previos';

    return date;

  }

}
