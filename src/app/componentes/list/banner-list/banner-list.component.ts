import { BannersService } from './../../services/banners.service';
import { Banners } from './../../models/banners';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.css']
})
export class BannerListComponent implements OnInit {
  allBanner: Banners[] = [];
  producao = environment.production

  constructor(private bannerService: BannersService, private router: Router) { }

  ngOnInit(): void {
    this.getBanner();
  }

  getBanner(){
    this.bannerService.getBanner().subscribe((data) =>{
      this.allBanner = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.bannerService.deleteBanner(id).subscribe(res=>{
        this.getBanner();
      })
    }
  }

}
