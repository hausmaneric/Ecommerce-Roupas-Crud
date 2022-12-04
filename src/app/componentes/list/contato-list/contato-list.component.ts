import { ContatoService } from './../../services/contato.service';
import { Contato } from './../../models/contato';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css']
})
export class ContatoListComponent implements OnInit {
  allContato: Contato[] = [];

  constructor(private contatoService: ContatoService, private router: Router) { }

  ngOnInit(): void {
    this.getSemelhante();
  }

  getSemelhante(){
    this.contatoService.getContato().subscribe((data) =>{
      this.allContato = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.contatoService.deleteContato(id).subscribe(res=>{
        this.getSemelhante();
      })
    }
  }

}
