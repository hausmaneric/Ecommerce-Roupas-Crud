import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tamanho } from '../../models/tamanho';
import { TamanhoService } from '../../services/tamanho.service';

@Component({
  selector: 'app-tamanho-update',
  templateUrl: './tamanho-update.component.html',
  styleUrls: ['./tamanho-update.component.css']
})
export class TamanhoUpdateComponent implements OnInit {
  tamanhoForm: Tamanho = {
    id: 0,
    titulo: ""
  }

  constructor(private tamanhoService: TamanhoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdTamanho(id);
    })
  }

  updateTamanho(){
    this.tamanhoService.updateTamanho(this.tamanhoForm).subscribe({
      next:(data) => {
        this.router.navigate(["tamanhos"]);
      },error:(error)=>{
        console.log(error);
      }
    })
  }

  getByIdTamanho(id:number){
    this.tamanhoService.getByIdTamanho(id).subscribe((data) => {
      this.tamanhoForm = data
    })
  }

  gotoList(){
    this.router.navigate(['/tamanhos']);
  }

}
