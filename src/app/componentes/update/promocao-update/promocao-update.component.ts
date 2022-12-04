import { Promocoes } from './../../models/promocoes';
import { Promocaoservice } from './../../services/promocao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-promocao-update',
  templateUrl: './promocao-update.component.html',
  styleUrls: ['./promocao-update.component.css']
})
export class PromocaoUpdateComponent implements OnInit {
  promocaoForm: Promocoes = {
    id: 0,
    nome: "",
    taxa: 0
  }

  constructor(private promocaoService: Promocaoservice, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdPromocao(id);
    })
  }

  updatePromocao(){
    this.promocaoService.updatePromocao(this.promocaoForm).subscribe({
      next:(data) => {
        this.router.navigate(["promocoes"]);
      },error:(error)=>{
        console.log(error);
      }
    })
  }

  getByIdPromocao(id:number){
    this.promocaoService.getByIdPromocao(id).subscribe((data) => {
      this.promocaoForm = data
    })
  }

  gotoList(){
    this.router.navigate(['/promocoes']);
  }
}
