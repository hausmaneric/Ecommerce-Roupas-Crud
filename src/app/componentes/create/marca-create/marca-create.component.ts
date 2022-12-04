import { MarcaService } from './../../services/marca.service';
import { Marca } from './../../models/marca';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marca-create',
  templateUrl: './marca-create.component.html',
  styleUrls: ['./marca-create.component.css']
})
export class MarcaCreateComponent implements OnInit {
  marcaForm: Marca = {
    id: 0,
    nome: "",
    icone:"",
  }

  constructor(private marcaService: MarcaService, private router: Router) { }

  ngOnInit(): void {
  }

  createMarca(){
    this.marcaService.createMarca(this.marcaForm).subscribe({
      next:(data) => {
        this.router.navigate(['/marcas']);
      },error: (error) =>{
        console.log(error);
      }
    })
  }

  gotoList(){
    this.router.navigate(['/marcas']);
  }
}
