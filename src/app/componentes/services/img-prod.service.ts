import { Produto } from './../models/produto';
import { Img_Prod } from './../models/img_prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImgProdService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getImage(){
    return this.http.get<Img_Prod[]>(`${this.API}/img_prod`);
  }

  createImage(payLoad:Img_Prod){
    return this.http.post<Img_Prod>(`${this.API}/img_prod`, payLoad);
  }

  getByIdImage(id:number){
    return this.http.get<Img_Prod>(`${this.API}/img_prod/${id}`);
  }

  updateImage(payLoad:Img_Prod){
    return this.http.put(`${this.API}/img_prod/${payLoad.id}`,payLoad);
  }


  deleteImage(id:number){
    return this.http.delete<Img_Prod>(`${this.API}/img_prod/${id}`);
  }

  deleteImageProduct(prodId:number){
    const baseUrl=`${this.API}/img_prod?prod_id=`+prodId;
    return this.http.delete<Img_Prod>(baseUrl);
  }

  searchImageProduct(prodId:number){
    const baseUrl=`${this.API}/img_prod?prod_id=`+prodId;
    return this.http.get<Img_Prod>(baseUrl);
  }
}
