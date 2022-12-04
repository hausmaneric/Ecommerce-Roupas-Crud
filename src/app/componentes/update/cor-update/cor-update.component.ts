import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cor } from '../../models/cor';
import { CorService } from '../../services/cor.service';

@Component({
  selector: 'app-cor-update',
  templateUrl: './cor-update.component.html',
  styleUrls: ['./cor-update.component.css']
})
export class CorUpdateComponent implements OnInit {
  corForm: Cor = {
    id: 0,
    titulo: "",
    cor:""
  }

  constructor(private corService: CorService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdCor(id);
    })
  }

  updateCor(){
    this.corService.updateCor(this.corForm).subscribe({
      next:(data) => {
        this.router.navigate(["cores"]);
      },error:(error)=>{
        console.log(error);
      }
    })
  }

  getByIdCor(id:number){
    this.corService.getByIdCor(id).subscribe((data) => {
      this.corForm = data
    })
  }

  gotoList(){
    this.router.navigate(['/cores']);
  }

}
