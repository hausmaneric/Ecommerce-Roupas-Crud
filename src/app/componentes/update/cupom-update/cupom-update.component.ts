import { CupomService } from './../../services/cupom.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cupom } from '../../models/cupom';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-cupom-update',
  templateUrl: './cupom-update.component.html',
  styleUrls: ['./cupom-update.component.css']
})
export class CupomUpdateComponent implements OnInit {
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

  constructor(private cupomService: CupomService, private router: Router, private route: ActivatedRoute, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdCupom(id);
    })
  }

  updateCupom(){
    this.cupomService.updateCupom(this.cupomForm).subscribe({
      next:(data) => {
        this.router.navigate(["cupons"]);
      },error:(error)=>{
        console.log(error);
      }
    })
  }

  getByIdCupom(id:number){
    this.cupomService.getByIdCupom(id).subscribe((data) => {
      this.cupomForm = data
    })
  }

  gotoList(){
    this.router.navigate(['/cupons']);
  }

}
