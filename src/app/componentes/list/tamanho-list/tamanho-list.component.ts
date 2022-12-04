import { TamanhoService } from './../../services/tamanho.service';
import { Tamanho } from './../../models/tamanho';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tamanho-list',
  templateUrl: './tamanho-list.component.html',
  styleUrls: ['./tamanho-list.component.css']
})
export class TamanhoListComponent implements OnInit {
  allTamanho: Tamanho[] = [];

  constructor(private tamanhoService: TamanhoService, private router: Router) { }

  ngOnInit(): void {
    this.getMarca();
  }

  getMarca(){
    this.tamanhoService.getTamanho().subscribe((data) =>{
      this.allTamanho = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.tamanhoService.deleteTamanho(id).subscribe(res=>{
        this.getMarca();
      })
    }
  }

}
