import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';import { SubCategoria } from '../models/sub-categoria';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  constructor(private http: HttpClient) { }

  getSubCategoria(){
    return this.http.get<SubCategoria[]>("http://localhost:3000/SubCategoria");
  }

  createSubCategoria(payLoad:SubCategoria){
    return this.http.post<SubCategoria>("http://localhost:3000/SubCategoria", payLoad);
  }

  getByIdSubCategoria(id:number){
    return this.http.get<SubCategoria>(`http://localhost:3000/SubCategoria/${id}`);
  }

  updateSubCategoria(payLoad:SubCategoria){
    return this.http.put(`http://localhost:3000/SubCategoria/${payLoad.id}`,payLoad);
  }

  deleteSubCategoria(id:number){
    return this.http.delete<SubCategoria>(`http://localhost:3000/SubCategoria/${id}`);
  }
}
