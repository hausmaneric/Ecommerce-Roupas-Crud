import { CategoriaService } from './../../services/categoria.service';
import { Categoria } from './../../models/categoria';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {
  categoriaForm: Categoria = {
    id: 0,
    nome: "",
    image:""
  }

  constructor(private categoriaService: CategoriaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdCategoria(id);
    })
  }

  updateCategoria(){
    this.categoriaService.updateCategoria(this.categoriaForm).subscribe({
      next:(data) => {
        this.router.navigate(["categorias"]);
      },error:(error)=>{
        console.log(error);
      }
    })
  }

  getByIdCategoria(id:number){
    this.categoriaService.getByIdCategoria(id).subscribe((data) => {
      this.categoriaForm = data
    })
  }

  gotoList(){
    this.router.navigate(['/categorias']);
  }

}
