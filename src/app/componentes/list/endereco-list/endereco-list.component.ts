import { EnderecoService } from './../../services/endereco.service';
import { Endereco } from './../../models/endereco';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.component.html',
  styleUrls: ['./endereco-list.component.css']
})
export class EnderecoListComponent implements OnInit {
  allEndereco: Endereco[] = [];

  constructor(private enderecoService: EnderecoService, private router: Router) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(){
    this.enderecoService.getEndereco().subscribe((data) =>{
      this.allEndereco = data;
    })
  }

}
