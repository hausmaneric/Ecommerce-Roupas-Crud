import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Destaque } from '../models/destaques';

@Injectable({
  providedIn: 'root'
})
export class DestaqueService {

  constructor(private http: HttpClient) { }

  getDestaque(){
    return this.http.get<Destaque[]>("http://localhost:3000/Destaque");
  }

  createDestaque(payLoad:Destaque){
    return this.http.post<Destaque>("http://localhost:3000/Destaque", payLoad);
  }

  getByIdDestaque(id:number){
    return this.http.get<Destaque>(`http://localhost:3000/Destaque/${id}`);
  }

  updateDestaque(payLoad:Destaque){
    return this.http.put(`http://localhost:3000/Destaque/${payLoad.id}`,payLoad);
  }

  deleteDestaque(id:number){
    return this.http.delete<Destaque>(`http://localhost:3000/Destaque/${id}`);
  }
}
