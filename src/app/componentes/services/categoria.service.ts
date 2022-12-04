import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getCategoria(){
    return this.http.get<Categoria[]>("http://localhost:3000/Categoria");
  }

  createCategoria(payLoad:Categoria){
    return this.http.post<Categoria>("http://localhost:3000/Categoria", payLoad);
  }

  getByIdCategoria(id:number){
    return this.http.get<Categoria>(`http://localhost:3000/Categoria/${id}`);
  }

  updateCategoria(payLoad:Categoria){
    return this.http.put(`http://localhost:3000/Categoria/${payLoad.id}`,payLoad);
  }

  deleteCategoria(id:number){
    return this.http.delete<Categoria>(`http://localhost:3000/Categoria/${id}`);
  }

}
