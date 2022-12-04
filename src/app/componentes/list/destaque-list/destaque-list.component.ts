import { DestaqueService } from './../../services/destaque.service';
import { Destaque } from './../../models/destaques';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destaque-list',
  templateUrl: './destaque-list.component.html',
  styleUrls: ['./destaque-list.component.css']
})
export class DestaqueListComponent implements OnInit {
  allDestaque: Destaque[] = [];

  constructor(private destaqueService: DestaqueService, private router: Router) { }

  ngOnInit(): void {
    this.getDestaque();
  }

  getDestaque(){
    this.destaqueService.getDestaque().subscribe((data) =>{
      this.allDestaque = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.destaqueService.deleteDestaque(id).subscribe(res=>{
        this.getDestaque();
      })
    }
  }

}
