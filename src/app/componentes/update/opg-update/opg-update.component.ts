import { OpgService } from './../../services/opg.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Opg } from '../../models/opg';

@Component({
  selector: 'app-opg-update',
  templateUrl: './opg-update.component.html',
  styleUrls: ['./opg-update.component.css']
})
export class OpgUpdateComponent implements OnInit {
  opgForm: Opg = {
    id: 0,
    nome: "",
    parcelas:0,
    tipo: 0,
    promocao: 0
  }

  constructor(private opgService: OpgService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdOpg(id);
    })
  }

  updateOpg(){
    this.opgService.updateOpg(this.opgForm).subscribe({
      next:(data) => {
        this.router.navigate(["opgs"]);
      },error:(error)=>{
        console.log(error);
      }
    })
  }

  getByIdOpg(id:number){
    this.opgService.getByIdOpg(id).subscribe((data) => {
      this.opgForm = data
    })
  }

  gotoList(){
    this.router.navigate(['/opgs']);
  }

}
