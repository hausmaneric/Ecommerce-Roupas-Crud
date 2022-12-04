import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tamanho } from '../models/tamanho';

@Injectable({
  providedIn: 'root'
})
export class TamanhoService {

  constructor(private http: HttpClient) { }

  getTamanho(){
    return this.http.get<Tamanho[]>("http://localhost:3000/Tamanho");
  }

  createTamanho(payLoad:Tamanho){
    return this.http.post<Tamanho>("http://localhost:3000/Tamanho", payLoad);
  }

  getByIdTamanho(id:number){
    return this.http.get<Tamanho>(`http://localhost:3000/Tamanho/${id}`);
  }

  updateTamanho(payLoad:Tamanho){
    return this.http.put(`http://localhost:3000/Tamanho/${payLoad.id}`,payLoad);
  }

  deleteTamanho(id:number){
    return this.http.delete<Tamanho>(`http://localhost:3000/Tamanho/${id}`);
  }
}
