import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {
 
 constructor(
    public router: Router,
  ) {}
 
  async canActivate(): Promise<boolean> {
    const role = await localStorage.getItem("role");
    if (!role||role!="worker") {
      this.router.navigateByUrl("home");
      return false;
    }
    return true;
  }
}