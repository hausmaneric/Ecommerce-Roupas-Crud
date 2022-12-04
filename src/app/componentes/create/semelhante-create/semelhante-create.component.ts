import { Semelhanteservice } from './../../services/semelhantes.service';
import { Semelhantes } from './../../models/semelhantes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-semelhante-create',
  templateUrl: './semelhante-create.component.html',
  styleUrls: ['./semelhante-create.component.css']
})
export class SemelhanteCreateComponent implements OnInit {
  semelhanteForm: Semelhantes = {
    id: 0,
    nome: ""
  }

  constructor(private semelhanteService: Semelhanteservice, private router: Router) { }

  ngOnInit(): void {
  }

  createSemelhante(){
    this.semelhanteService.createSemelhante(this.semelhanteForm).subscribe({
      next:(data) => {
        this.router.navigate(['/semelhantes']);
      },error: (error) =>{
        console.log(error);
      }
    })
  }

  gotoList(){
    this.router.navigate(['/semelhantes']);
  }

}
