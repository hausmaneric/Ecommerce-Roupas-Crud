import { DestaqueService } from './../../services/destaque.service';
import { Destaque } from './../../models/destaques';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destaque-create',
  templateUrl: './destaque-create.component.html',
  styleUrls: ['./destaque-create.component.css']
})
export class DestaqueCreateComponent implements OnInit {
  destaqueForm: Destaque = {
    id: 0,
    titulo: "",
    descricao: "",
    image:"",
  }

  constructor(private destaqueService: DestaqueService, private router: Router) { }

  ngOnInit(): void {
  }

  createDestaque(){
    this.destaqueService.createDestaque(this.destaqueForm).subscribe({
      next:(data) => {
        this.router.navigate(['/destaques']);
      },error: (error) =>{
        console.log(error);
      }
    })
  }

  gotoList(){
    this.router.navigate(['/promocoes']);
  }
}
