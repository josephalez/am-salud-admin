import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'am-salud-admin';

  constructor(
    private authService:AuthService,
    private router:Router,
  ){}

  async ngOnInit(){

    if(await localStorage.getItem("token")){
      this.authService.verifyToken()
      .then(res=>{
        console.log('logged in',res);
        localStorage.setItem("isAuthenticated","true");
        localStorage.setItem("role",res.user.role);
        localStorage.setItem("area", res.user.area);
        //this.router.navigateByUrl('/home');
      })
      .catch(err=>{
        console.log(err);
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("role");
        localStorage.removeItem("area");        
        this.router.navigateByUrl('/login');
      });
    }
    else localStorage.removeItem("isAuthenticated");

  }

}
