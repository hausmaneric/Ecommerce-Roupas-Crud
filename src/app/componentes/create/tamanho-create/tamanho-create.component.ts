import { TamanhoService } from './../../services/tamanho.service';
import { Tamanho } from './../../models/tamanho';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tamanho-create',
  templateUrl: './tamanho-create.component.html',
  styleUrls: ['./tamanho-create.component.css']
})
export class TamanhoCreateComponent implements OnInit {
  tamanhoForm: Tamanho = {
    id: 0,
    titulo: ""
  }

  constructor(private tamanhoService: TamanhoService, private router: Router) { }

  ngOnInit(): void {
  }

  createTamanho(){
    this.tamanhoService.createTamanho(this.tamanhoForm).subscribe({
      next:(data) => {
        this.router.navigate(['/tamanhos']);
      },error: (error) =>{
        console.log(error);
      }
    })
  }

  gotoList(){
    this.router.navigate(['/tamanhos']);
  }

}
