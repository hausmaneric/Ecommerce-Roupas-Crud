import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tamanho } from '../models/tamanho';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TamanhoService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getTamanho(){
    return this.http.get<Tamanho[]>(`${this.API}/Tamanho`);
  }

  createTamanho(payLoad:Tamanho){
    return this.http.post<Tamanho>(`${this.API}/Tamanho`, payLoad);
  }

  getByIdTamanho(id:number){
    return this.http.get<Tamanho>(`${this.API}/Tamanho/${id}`);
  }

  updateTamanho(payLoad:Tamanho){
    return this.http.put(`${this.API}/Tamanho/${payLoad.id}`,payLoad);
  }

  deleteTamanho(id:number){
    return this.http.delete<Tamanho>(`${this.API}/Tamanho/${id}`);
  }
}
