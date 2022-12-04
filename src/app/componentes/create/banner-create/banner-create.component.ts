import { Route, Router } from '@angular/router';
import { BannersService } from './../../services/banners.service';
import { Banners } from './../../models/banners';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-banner-create',
  templateUrl: './banner-create.component.html',
  styleUrls: ['./banner-create.component.css']
})
export class BannerCreateComponent implements OnInit {
  bannerForm: Banners = {
    id: 0,
    image: "",
    descricao: ""
  }

  constructor(private bannerService: BannersService, private router: Router) { }

  ngOnInit(): void {
  }

  createBanner(){
    this.bannerService.createBanner(this.bannerForm).subscribe({
      next:(data) => {
        this.router.navigate(['/banners']);
      },error: (error) =>{
        console.log(error);
      }
    })
  }

  gotoList(){
    this.router.navigate(['/banners']);
  }

}
