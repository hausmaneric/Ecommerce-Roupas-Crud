import { MarcaService } from './../../services/marca.service';
import { Marca } from './../../models/marca';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-marca-update',
  templateUrl: './marca-update.component.html',
  styleUrls: ['./marca-update.component.css']
})
export class MarcaUpdateComponent implements OnInit {
  marcaForm: Marca = {
    id: 0,
    nome: "",
    icone:""
  }

  constructor(private marcaService: MarcaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdMarca(id);
    })
  }

  updateMarca(){
    this.marcaService.updateMarca(this.marcaForm).subscribe({
      next:(data) => {
        this.router.navigate(["marcas"]);
      },error:(error)=>{
        console.log(error);
      }
    })
  }

  getByIdMarca(id:number){
    this.marcaService.getByIdMarca(id).subscribe((data) => {
      this.marcaForm = data
    })
  }

  gotoList(){
    this.router.navigate(['/marcas']);
  }

}
