import { CorService } from './../../services/cor.service';
import { Cor } from './../../models/cor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cor-create',
  templateUrl: './cor-create.component.html',
  styleUrls: ['./cor-create.component.css']
})
export class CorCreateComponent implements OnInit {
  corForm: Cor = {
    id: 0,
    titulo: "",
    cor:""
  }

  constructor(private corService: CorService, private router: Router) { }

  ngOnInit(): void {
  }

  createCor(){
    this.corService.createCor(this.corForm).subscribe({
      next:(data) => {
        this.router.navigate(['/cores']);
      },error: (error) =>{
        console.log(error);
      }
    })
  }

  gotoList(){
    this.router.navigate(['/cores']);
  }

}
