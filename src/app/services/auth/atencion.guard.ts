import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AtencionGuard {

  constructor(
    private router:Router
  ){}

  async canActivate(){
    const role = await localStorage.getItem("role");
    if (!role||(role!="atencion"&&role!="admin")) {
      this.router.navigateByUrl("home");
      return false;
    }
    return true;
  }
  
}
