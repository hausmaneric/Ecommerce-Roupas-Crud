import { Semelhanteservice } from './../../services/semelhantes.service';
import { Semelhantes } from './../../models/semelhantes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-semelhante-list',
  templateUrl: './semelhante-list.component.html',
  styleUrls: ['./semelhante-list.component.css']
})
export class SemelhanteListComponent implements OnInit {
  allSemelhante: Semelhantes[] = [];

  constructor(private semelhanteService: Semelhanteservice, private router: Router) { }

  ngOnInit(): void {
    this.getSemelhante();
  }

  getSemelhante(){
    this.semelhanteService.getSemelhante().subscribe((data) =>{
      this.allSemelhante = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.semelhanteService.deleteSemelhante(id).subscribe(res=>{
        this.getSemelhante();
      })
    }
  }

}
