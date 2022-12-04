import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../models/categoria';
import { SubCategoria } from '../../models/sub-categoria';
import { CategoriaService } from '../../services/categoria.service';
import { SubcategoriaService } from '../../services/subcategoria.service';

@Component({
  selector: 'app-subcategoria-update',
  templateUrl: './subcategoria-update.component.html',
  styleUrls: ['./subcategoria-update.component.css']
})
export class SubcategoriaUpdateComponent implements OnInit {

  categoria: Categoria[] = [];
  subcategoriaForm: SubCategoria = {
    id: 0,
    titulo: "",
    categoria_id:0,
    categoria:""
  }

  constructor(private subcategoriaService: SubcategoriaService,private categoriaService: CategoriaService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdSubcategoria(id);
    })
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
      }, 1000);
    }
  }

  updateSubcategoria(){
    this.selectCategoria()
    setTimeout(() => {
      this.subcategoriaService.updateSubCategoria(this.subcategoriaForm).subscribe({
        next:(data) => {
          this.router.navigate(["subCategorias"]);
        },error:(error)=>{
          console.log(error);
        }
      })
    }, 500);
  }

  getByIdSubcategoria(id:number){
    this.subcategoriaService.getByIdSubCategoria(id).subscribe((data) => {
      this.subcategoriaForm = data
    })
  }

  gotoList(){
    this.router.navigate(['/subCategorias']);
  }
}
