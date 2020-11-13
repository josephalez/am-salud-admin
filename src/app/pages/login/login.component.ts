import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/notifications/alert.service';
import { isArray } from 'util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(
    private authService:AuthService,
    private router:Router,
    private alertService:AlertService,
    private formBuilder:FormBuilder,
  ) {
    this.loginForm= this.formBuilder.group({
      email:["", Validators.required],
      password:["", Validators.required],
    })
  }

  ngOnInit() {
  }

  login(){

    if(this.loginForm.invalid) {
      this.alertService.alertError('Rellene todos los campos');
      return;
    }


    this.authService.login(this.loginForm.value)
    .then(
      res=>{
        console.log("res", res);
        localStorage.setItem("token", res.token);
        localStorage.setItem("isAuthenticated", 'true');
        localStorage.setItem("role",res.user.role);       
        localStorage.setItem("area",res.user.area);        
        this.alertService.alertSuccess('Inicio de sesión exitoso!');
        this.router.navigateByUrl('/home');
      }
    ).catch(err=>{
      console.log(err);
      if(err.status==422){
        for(let errorIndex in err.error.error){
          if(isArray(err.error.error[errorIndex])) err.error.error[errorIndex].map(errorMessage=>this.alertService.alertError(errorMessage))
          else this.alertService.alertError(err.error.error[errorIndex]);
        }
      }
      else if(err.status){
        this.alertService.alertError(err.error.message);
      }
    })

  }

}
