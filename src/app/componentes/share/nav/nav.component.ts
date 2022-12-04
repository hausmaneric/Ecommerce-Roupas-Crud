import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  mostrarMenu: boolean = false;

  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.mostrarMenuEmitter.subscribe( mostrar => this.mostrarMenu = mostrar)
  }

}
