import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../../models/login';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-update',
  templateUrl: './login-update.component.html',
  styleUrls: ['./login-update.component.css']
})
export class LoginUpdateComponent implements OnInit {
  loginForm: Login = {
    id: 0,
    nome: "",
    login:"",
    email: "",
    senha:"",
    nivel: 0,
    image:"",
  }

  constructor(private loginService: LoginService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdLogin(id);
    })
  }

  updateLogin(){
    setTimeout(() => {
      this.loginForm.email = this.loginForm.login
    }, 500);
    setTimeout(() => {
      this.loginService.updateLogin(this.loginForm).subscribe({
        next:(data) => {
          this.router.navigate(["logins"]);
        },error:(error)=>{
          console.log(error);
        }
      })
    }, 500);

  }

  getByIdLogin(id:number){
    this.loginService.getByIdLogin(id).subscribe((data) => {
      this.loginForm = data
    })
  }

  gotoList(){
    this.router.navigate(['/logins']);
  }
}
