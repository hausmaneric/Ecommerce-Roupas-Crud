import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCategoria } from '../models/sub-categoria';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getSubCategoria(){
    return this.http.get<SubCategoria[]>(`${this.API}/SubCategoria`);
  }

  createSubCategoria(payLoad:SubCategoria){
    return this.http.post<SubCategoria>(`${this.API}/SubCategoria`, payLoad);
  }

  getByIdSubCategoria(id:number){
    return this.http.get<SubCategoria>(`${this.API}/SubCategoria/${id}`);
  }

  updateSubCategoria(payLoad:SubCategoria){
    return this.http.put(`${this.API}/SubCategoria/${payLoad.id}`,payLoad);
  }

  deleteSubCategoria(id:number){
    return this.http.delete<SubCategoria>(`${this.API}/SubCategoria/${id}`);
  }
}
