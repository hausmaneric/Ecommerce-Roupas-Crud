import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Banners } from '../../models/banners';
import { BannersService } from '../../services/banners.service';

@Component({
  selector: 'app-banner-update',
  templateUrl: './banner-update.component.html',
  styleUrls: ['./banner-update.component.css']
})
export class BannerUpdateComponent implements OnInit {
  bannerForm: Banners = {
    id: 0,
    image: "",
    descricao: ""
  }

  constructor(private bannerService: BannersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdBanner(id);
    })
  }

  updateBanner(){
    this.bannerService.updateBanner(this.bannerForm).subscribe({
      next:(data) => {
        this.router.navigate(["banners"]);
      },error:(error)=>{
        console.log(error);
      }
    })
  }

  getByIdBanner(id:number){
    this.bannerService.getByIdBanner(id).subscribe((data) => {
      this.bannerForm = data
    })
  }

  gotoList(){
    this.router.navigate(['/banners']);
  }

}
