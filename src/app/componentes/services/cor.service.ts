import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cor } from '../models/cor';

@Injectable({
  providedIn: 'root'
})
export class CorService {

  constructor(private http: HttpClient) { }

  getCor(){
    return this.http.get<Cor[]>("http://localhost:3000/Cor");
  }

  createCor(payLoad:Cor){
    return this.http.post<Cor>("http://localhost:3000/Cor", payLoad);
  }

  getByIdCor(id:number){
    return this.http.get<Cor>(`http://localhost:3000/Cor/${id}`);
  }

  updateCor(payLoad:Cor){
    return this.http.put(`http://localhost:3000/Cor/${payLoad.id}`,payLoad);
  }

  deleteCor(id:number){
    return this.http.delete<Cor>(`http://localhost:3000/Cor/${id}`);
  }
}
