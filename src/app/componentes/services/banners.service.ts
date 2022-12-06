import { Banners } from './../models/banners';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannersService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getBanner(){
    return this.http.get<Banners[]>(`${this.API}/banners`);
  }

  createBanner(payLoad:Banners){
    return this.http.post<Banners>(`${this.API}/banners`, payLoad);
  }

  getByIdBanner(id:number){
    return this.http.get<Banners>(`${this.API}/banners/${id}`);
  }

  updateBanner(payLoad:Banners){
    return this.http.put(`${this.API}/banners/${payLoad.id}`,payLoad);
  }

  deleteBanner(id:number){
    return this.http.delete<Banners>(`${this.API}/banners/${id}`);
  }

}
