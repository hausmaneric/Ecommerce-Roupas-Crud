import { CupomService } from './../../services/cupom.service';
import { Cupom } from './../../models/cupom';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-cupom-create',
  templateUrl: './cupom-create.component.html',
  styleUrls: ['./cupom-create.component.css']
})
export class CupomCreateComponent implements OnInit {
  cupomForm: Cupom = {
    id:0,
    titulo:"",
    descricao:"",
    desconto_valor:0,
    desconto_porce:0,
    utilizado: false,
    user_id:0,
    user:"",
    image:"",
    validade:"",
    vencido:false
  }

  constructor(private cupomService: CupomService, private router: Router, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
  }

  createCupom(){
    this.cupomService.createCupom(this.cupomForm).subscribe({
      next:(data) => {
        this.router.navigate(['/cupons']);
      },error: (error) =>{
        console.log(error);
      }
    })
  }

  gotoList(){
    this.router.navigate(['/cupons']);
  }

}
