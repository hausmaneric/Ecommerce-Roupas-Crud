import { OpgService } from './../../services/opg.service';
import { Opg } from './../../models/opg';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opg-list',
  templateUrl: './opg-list.component.html',
  styleUrls: ['./opg-list.component.css']
})
export class OpgListComponent implements OnInit {
  allOpg: Opg[] = [];

  constructor(private opgService: OpgService, private router: Router) { }

  ngOnInit(): void {
    this.getMarca();
  }

  getMarca(){
    this.opgService.getOpg().subscribe((data) =>{
      this.allOpg = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.opgService.deleteOpg(id).subscribe(res=>{
        this.getMarca();
      })
    }
  }

}
