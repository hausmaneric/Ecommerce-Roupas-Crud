import { Produto } from './../models/produto';
import { Img_Prod } from './../models/img_prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgProdService {

  constructor(private http: HttpClient) { }

  getImage(){
    return this.http.get<Img_Prod[]>("http://localhost:3000/img_prod");
  }

  createImage(payLoad:Img_Prod){
    return this.http.post<Img_Prod>("http://localhost:3000/img_prod", payLoad);
  }

  getByIdImage(id:number){
    return this.http.get<Img_Prod>(`http://localhost:3000/img_prod/${id}`);
  }

  updateImage(payLoad:Img_Prod){
    return this.http.put(`http://localhost:3000/img_prod/${payLoad.id}`,payLoad);
  }


  deleteImage(id:number){
    return this.http.delete<Img_Prod>(`http://localhost:3000/img_prod/${id}`);
  }

  deleteImageProduct(prodId:number){
    const baseUrl="http://localhost:3000/img_prod?prod_id="+prodId;
    return this.http.delete<Img_Prod>(baseUrl);
  }

  searchImageProduct(prodId:number){
    const baseUrl="http://localhost:3000/img_prod?prod_id="+prodId;
    return this.http.get<Img_Prod>(baseUrl);
  }
}
