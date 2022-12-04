import { LoginService } from './../../services/login.service';
import { Login } from './../../models/login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  allUsuario: Login[] = [];

  mostrarMenu: boolean = false;

  login!: Login;

  constructor(private loginService: LoginService) { }

  nomeUsuario!: string;
  imgUsuario!: string;

  ngOnInit(): void {
    this.loginService.mostrarMenuEmitter.subscribe( mostrar => this.mostrarMenu = mostrar);
    this.loginService.mostrarNome.subscribe( mostrar => this.nomeUsuario = mostrar);
    this.loginService.mostrarImg.subscribe( mostrar => this.imgUsuario = mostrar);
    this.getUsuario();
  }

  getUsuario(){
    this.loginService.getLogin().subscribe((data) =>{
      this.allUsuario = data;
    })
  }
}
