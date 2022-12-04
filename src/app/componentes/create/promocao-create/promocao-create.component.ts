import { Promocaoservice } from './../../services/promocao.service';
import { Promocoes } from './../../models/promocoes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promocao-create',
  templateUrl: './promocao-create.component.html',
  styleUrls: ['./promocao-create.component.css']
})
export class PromocaoCreateComponent implements OnInit {
  promocaoForm: Promocoes = {
    id: 0,
    nome: "",
    taxa: 0
  }

  constructor(private promocaoService: Promocaoservice, private router: Router) { }

  ngOnInit(): void {
  }

  createPromocao(){
    this.promocaoService.createPromocao(this.promocaoForm).subscribe({
      next:(data) => {
        this.router.navigate(['/promocoes']);
      },error: (error) =>{
        console.log(error);
      }
    })
  }

  gotoList(){
    this.router.navigate(['/promocoes']);
  }

}
