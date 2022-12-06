import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getCategoria(){
    return this.http.get<Categoria[]>(`${this.API}/Categoria`);
  }

  createCategoria(payLoad:Categoria){
    return this.http.post<Categoria>(`${this.API}/Categoria`, payLoad);
  }

  getByIdCategoria(id:number){
    return this.http.get<Categoria>(`${this.API}/Categoria/${id}`);
  }

  updateCategoria(payLoad:Categoria){
    return this.http.put(`${this.API}/Categoria/${payLoad.id}`,payLoad);
  }

  deleteCategoria(id:number){
    return this.http.delete<Categoria>(`${this.API}/Categoria/${id}`);
  }

}
