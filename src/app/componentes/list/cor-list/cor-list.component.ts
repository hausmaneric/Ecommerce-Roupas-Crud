import { CorService } from './../../services/cor.service';
import { Cor } from './../../models/cor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cor-list',
  templateUrl: './cor-list.component.html',
  styleUrls: ['./cor-list.component.css']
})
export class CorListComponent implements OnInit {
  allCor: Cor[] = [];

  constructor(private corService: CorService, private router: Router) { }

  ngOnInit(): void {
    this.getMarca();
  }

  getMarca(){
    this.corService.getCor().subscribe((data) =>{
      this.allCor = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.corService.deleteCor(id).subscribe(res=>{
        this.getMarca();
      })
    }
  }
}
