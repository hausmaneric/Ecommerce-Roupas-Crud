import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Destaque } from '../../models/destaques';
import { DestaqueService } from '../../services/destaque.service';

@Component({
  selector: 'app-destaque-update',
  templateUrl: './destaque-update.component.html',
  styleUrls: ['./destaque-update.component.css']
})
export class DestaqueUpdateComponent implements OnInit {
  destaqueForm: Destaque = {
    id: 0,
    titulo: "",
    descricao: "",
    image:"",
  }

  constructor(private destaqueService: DestaqueService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdDestaque(id);
    })
  }

  updateDestaque(){
    this.destaqueService.updateDestaque(this.destaqueForm).subscribe({
      next:(data) => {
        this.router.navigate(["destaques"]);
      },error:(error)=>{
        console.log(error);
      }
    })
  }

  getByIdDestaque(id:number){
    this.destaqueService.getByIdDestaque(id).subscribe((data) => {
      this.destaqueForm = data
    })
  }

  gotoList(){
    this.router.navigate(['/destaques']);
  }

}
