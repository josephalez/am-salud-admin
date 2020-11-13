import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aceptar',
  templateUrl: './aceptar.component.html',
  styleUrls: ['./aceptar.component.scss']
})
export class AceptarComponent implements OnInit {

  @Input() zone: any = null;
  @Output() accion: any = new EventEmitter;
  enviar = false;

  constructor () { }

  ngOnInit() {
    console.log("................");
    console.log(this.zone);
  }

  cerrar() {
    this.enviar = true;
    this.accion.emit(false)
  }
  aceptar() {
    this.enviar = true;
    this.accion.emit(true);
  }

}
