import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';
import { LoginDto } from '../../schemas/login.dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private connectionService:ConnectionService,
    private router: Router,
  ) { }

  login(params:LoginDto): Promise<any> {
      return this.connectionService.postUrl('users/admin',params);
  }

  logout(): void{
    localStorage.removeItem("token");
    localStorage.removeItem('user');
    localStorage.removeItem("isAuthenticated");
    this.router.navigateByUrl('/login');
  }

  verifyToken(): Promise<any>{
    return this.connectionService.getUrl('users/me');
  }

}
