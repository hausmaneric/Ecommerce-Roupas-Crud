

import { Opg } from './../../models/opg';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpgService } from '../../services/opg.service';

@Component({
  selector: 'app-opg-create',
  templateUrl: './opg-create.component.html',
  styleUrls: ['./opg-create.component.css']
})
export class OpgCreateComponent implements OnInit {
  opgForm: Opg = {
    id: 0,
    nome: "",
    parcelas:0,
    tipo: 0,
    promocao: 0
  }

  constructor(private opgService: OpgService, private router: Router) { }

  ngOnInit(): void {
  }

  createOpg(){
    this.opgService.createOpg(this.opgForm).subscribe({
      next:(data) => {
        this.router.navigate(['/opgs']);
      },error: (error) =>{
        console.log(error);
      }
    })
  }

  gotoList(){
    this.router.navigate(['/opgs']);
  }
}
