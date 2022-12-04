import { LoginService } from './../../services/login.service';
import { Login } from './../../models/login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-create',
  templateUrl: './login-create.component.html',
  styleUrls: ['./login-create.component.css']
})
export class LoginCreateComponent implements OnInit {
  loginForm: Login = {
    id: 0,
    nome: "",
    login:"",
    email: "",
    senha:"",
    nivel: 0,
    image:"",
  }

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  createLogin(){
    setTimeout(() => {
      this.loginForm.email = this.loginForm.login
    }, 500);
    setTimeout(() => {
      this.loginService.createLogin(this.loginForm).subscribe({
        next:(data) => {
          this.router.navigate(['/logins']);
        },error: (error) =>{
          console.log(error);
        }
      })
    }, 500);
  }

  gotoList(){
    this.router.navigate(['/logins']);
  }

}
