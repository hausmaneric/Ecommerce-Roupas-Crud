import { CupomService } from './../../services/cupom.service';
import { Cupom } from './../../models/cupom';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cupom-list',
  templateUrl: './cupom-list.component.html',
  styleUrls: ['./cupom-list.component.css']
})
export class CupomListComponent implements OnInit {
  allCupom: Cupom[] = [];

  constructor(private cupomService: CupomService, private router: Router) { }

  ngOnInit(): void {
    this.getCupom();
  }

  getCupom(){
    this.cupomService.getCupom().subscribe((data) =>{
      this.allCupom = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.cupomService.deleteCupom(id).subscribe(res=>{
        this.getCupom();
      })
    }
  }

}
