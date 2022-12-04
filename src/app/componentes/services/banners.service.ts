import { Banners } from './../models/banners';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  constructor(private http: HttpClient) { }

  getBanner(){
    return this.http.get<Banners[]>("http://localhost:3000/banners");
  }

  createBanner(payLoad:Banners){
    return this.http.post<Banners>("http://localhost:3000/banners", payLoad);
  }

  getByIdBanner(id:number){
    return this.http.get<Banners>(`http://localhost:3000/banners/${id}`);
  }

  updateBanner(payLoad:Banners){
    return this.http.put(`http://localhost:3000/banners/${payLoad.id}`,payLoad);
  }

  deleteBanner(id:number){
    return this.http.delete<Banners>(`http://localhost:3000/banners/${id}`);
  }

}
