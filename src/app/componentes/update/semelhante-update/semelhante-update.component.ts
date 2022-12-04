import { Semelhanteservice } from './../../services/semelhantes.service';
import { Semelhantes } from './../../models/semelhantes';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-semelhante-update',
  templateUrl: './semelhante-update.component.html',
  styleUrls: ['./semelhante-update.component.css']
})
export class SemelhanteUpdateComponent implements OnInit {
  semelhanteForm: Semelhantes = {
    id: 0,
    nome: ""
  }

  constructor(private semelhanteService: Semelhanteservice, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdSemelhante(id);
    })
  }

  updateSemelhante(){
    this.semelhanteService.updateSemelhante(this.semelhanteForm).subscribe({
      next:(data) => {
        this.router.navigate(["semelhantes"]);
      },error:(error)=>{
        console.log(error);
      }
    })
  }

  getByIdSemelhante(id:number){
    this.semelhanteService.getByIdSemelhante(id).subscribe((data) => {
      this.semelhanteForm = data
    })
  }

  gotoList(){
    this.router.navigate(['/semelhantes']);
  }

}
