import { Promocaoservice } from './../../services/promocao.service';
import { Promocoes } from './../../models/promocoes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promocao-list',
  templateUrl: './promocao-list.component.html',
  styleUrls: ['./promocao-list.component.css']
})
export class PromocaoListComponent implements OnInit {
  allPromocao: Promocoes[] = [];

  constructor(private promocaoService: Promocaoservice, private router: Router) { }

  ngOnInit(): void {
    this.getPromocao();
  }

  getPromocao(){
    this.promocaoService.getPromocao().subscribe((data) =>{
      this.allPromocao = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.promocaoService.deletePromocao(id).subscribe(res=>{
        this.getPromocao();
      })
    }
  }

}
