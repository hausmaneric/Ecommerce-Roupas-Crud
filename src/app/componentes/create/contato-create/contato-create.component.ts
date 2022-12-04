import { ContatoService } from './../../services/contato.service';
import { Contato } from './../../models/contato';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contato-create',
  templateUrl: './contato-create.component.html',
  styleUrls: ['./contato-create.component.css']
})
export class ContatoCreateComponent implements OnInit {
  contatoForm: Contato = {
    id: 0,
    nome: "",
    telefone:0,
    email:"",
    instagram:"",
    whatsapp:"",
    facebook:"",
  }

  constructor(private contatoService: ContatoService, private router: Router) { }

  ngOnInit(): void {
  }

  createContato(){
    this.contatoService.createContato(this.contatoForm).subscribe({
      next:(data) => {
        this.router.navigate(['/contatos']);
      },error: (error) =>{
        console.log(error);
      }
    })
  }

  gotoList(){
    this.router.navigate(['/contatos']);
  }

}
