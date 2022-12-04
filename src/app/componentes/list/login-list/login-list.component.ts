import { LoginService } from './../../services/login.service';
import { Login } from './../../models/login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css']
})
export class LoginListComponent implements OnInit {
  allLogin: Login[] = [];

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.getMarca();
  }

  getMarca(){
    this.loginService.getLogin().subscribe((data) =>{
      this.allLogin = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.loginService.deleteLogin(id).subscribe(res=>{
        this.getMarca();
      })
    }
  }
}
