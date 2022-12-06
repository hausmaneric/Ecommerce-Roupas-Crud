import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cor } from '../models/cor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CorService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getCor(){
    return this.http.get<Cor[]>(`${this.API}/Cor`);
  }

  createCor(payLoad:Cor){
    return this.http.post<Cor>(`${this.API}/Cor`, payLoad);
  }

  getByIdCor(id:number){
    return this.http.get<Cor>(`${this.API}/Cor/${id}`);
  }

  updateCor(payLoad:Cor){
    return this.http.put(`${this.API}/Cor/${payLoad.id}`,payLoad);
  }

  deleteCor(id:number){
    return this.http.delete<Cor>(`${this.API}/Cor/${id}`);
  }
}
