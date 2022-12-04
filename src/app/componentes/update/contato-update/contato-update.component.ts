import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from '../../models/contato';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-contato-update',
  templateUrl: './contato-update.component.html',
  styleUrls: ['./contato-update.component.css']
})
export class ContatoUpdateComponent implements OnInit {
  contatoForm: Contato = {
    id: 0,
    nome: "",
    telefone:0,
    email:"",
    instagram:"",
    whatsapp:"",
    facebook:"",
  }

  constructor(private contatoService: ContatoService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdContato(id);
    })
  }

  updateContato(){
    this.contatoService.updateContato(this.contatoForm).subscribe({
      next:(data) => {
        this.router.navigate(["contatos"]);
      },error:(error)=>{
        console.log(error);
      }
    })
  }

  getByIdContato(id:number){
    this.contatoService.getByIdContato(id).subscribe((data) => {
      this.contatoForm = data
    })
  }

  gotoList(){
    this.router.navigate(['/contatos']);
  }

}
