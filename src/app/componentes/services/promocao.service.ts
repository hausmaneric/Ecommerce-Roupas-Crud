import { Promocoes } from './../models/promocoes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Promocaoservice {

  constructor(private http: HttpClient) { }

  getPromocao(){
    return this.http.get<Promocoes[]>("http://localhost:3000/Promocoes");
  }

  createPromocao(payLoad:Promocoes){
    return this.http.post<Promocoes>("http://localhost:3000/Promocoes", payLoad);
  }

  getByIdPromocao(id:number){
    return this.http.get<Promocoes>(`http://localhost:3000/Promocoes/${id}`);
  }

  updatePromocao(payLoad:Promocoes){
    return this.http.put(`http://localhost:3000/Promocoes/${payLoad.id}`,payLoad);
  }

  deletePromocao(id:number){
    return this.http.delete<Promocoes>(`http://localhost:3000/Promocoes/${id}`);
  }
}
