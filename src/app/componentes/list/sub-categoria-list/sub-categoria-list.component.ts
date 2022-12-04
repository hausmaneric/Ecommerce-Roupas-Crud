import { SubCategoria } from './../../models/sub-categoria';
import { SubcategoriaService } from './../../services/subcategoria.service';
import { Categoria } from './../../models/categoria';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-categoria-list',
  templateUrl: './sub-categoria-list.component.html',
  styleUrls: ['./sub-categoria-list.component.css']
})
export class SubCategoriaListComponent implements OnInit {
  allCategoria: SubCategoria[] = [];

  constructor(private categoriaService: SubcategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.getCategoria();
  }

  getCategoria(){
    this.categoriaService.getSubCategoria().subscribe((data) =>{
      this.allCategoria = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.categoriaService.deleteSubCategoria(id).subscribe(res=>{
        this.getCategoria();
      })
    }
  }

}
