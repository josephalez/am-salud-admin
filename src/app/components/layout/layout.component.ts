import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isWorker:boolean;

  isAtencion:boolean;

  constructor(
    private authService:AuthService,    
  ) { }

  async ngOnInit() {
    let role= await localStorage.getItem("role");
    if(role!="worker") this.isWorker=false;
    else this.isWorker=true;
    if(role=='atencion') this.isAtencion = true;
    else this.isAtencion=false;
  }

  
  logout(){
    this.authService.logout();
  }

}
