import { MarcaService } from './../../services/marca.service';
import { Marca } from './../../models/marca';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.css']
})
export class MarcaListComponent implements OnInit {
  allMarca: Marca[] = [];

  constructor(private marcaService: MarcaService, private router: Router) { }

  ngOnInit(): void {
    this.getMarca();
  }

  getMarca(){
    this.marcaService.getMarca().subscribe((data) =>{
      this.allMarca = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.marcaService.deleteMarca(id).subscribe(res=>{
        this.getMarca();
      })
    }
  }

}
