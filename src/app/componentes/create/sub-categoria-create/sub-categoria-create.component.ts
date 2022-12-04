import { SubcategoriaService } from './../../services/subcategoria.service';
import { SubCategoria } from './../../models/sub-categoria';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-sub-categoria-create',
  templateUrl: './sub-categoria-create.component.html',
  styleUrls: ['./sub-categoria-create.component.css']
})
export class SubCategoriaCreateComponent implements OnInit {
  categoria: Categoria[] = [];
  subcategoriaForm: SubCategoria = {
    id: 0,
    titulo: "",
    categoria_id:0,
    categoria:""
  }

  constructor(private subcategoriaService: SubcategoriaService,private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.getCategoria()
  }

  getCategoria(){
    this.categoriaService.getCategoria().subscribe((data) =>{
      this.categoria = data;
    })
  }

  selectCategoria(){
    let nomeCategoria:string
    if(this.subcategoriaForm.categoria_id == 0){
      this.subcategoriaForm.categoria = ""
    }else{
      this.categoriaService.getByIdCategoria(this.subcategoriaForm.categoria_id).subscribe((data)=>{
        nomeCategoria = data.nome
      })
      setTimeout(() => {
        this.subcategoriaForm.categoria = nomeCategoria
      }, 500);
    }
  }

  createSubCategoria(){
    this.selectCategoria()
    setTimeout(() => {
      this.subcategoriaService.createSubCategoria(this.subcategoriaForm).subscribe({
        next:(data) => {
          this.router.navigate(['/subCategorias']);
        },error: (error) =>{
          console.log(error);
        }
      })
    }, 1000);

  }

  gotoList(){
    this.router.navigate(['/subCategorias']);
  }

}
