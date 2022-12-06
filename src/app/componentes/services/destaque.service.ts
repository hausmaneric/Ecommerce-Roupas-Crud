import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Destaque } from '../models/destaques';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DestaqueService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getDestaque(){
    return this.http.get<Destaque[]>(`${this.API}/Destaque`);
  }

  createDestaque(payLoad:Destaque){
    return this.http.post<Destaque>(`${this.API}/Destaque`, payLoad);
  }

  getByIdDestaque(id:number){
    return this.http.get<Destaque>(`${this.API}/Destaque/${id}`);
  }

  updateDestaque(payLoad:Destaque){
    return this.http.put(`${this.API}/Destaque/${payLoad.id}`,payLoad);
  }

  deleteDestaque(id:number){
    return this.http.delete<Destaque>(`${this.API}/Destaque/${id}`);
  }
}
