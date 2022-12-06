import { Promocoes } from './../models/promocoes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Promocaoservice {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getPromocao(){
    return this.http.get<Promocoes[]>(`${this.API}/Promocoes`);
  }

  createPromocao(payLoad:Promocoes){
    return this.http.post<Promocoes>(`${this.API}/Promocoes`, payLoad);
  }

  getByIdPromocao(id:number){
    return this.http.get<Promocoes>(`${this.API}/Promocoes/${id}`);
  }

  updatePromocao(payLoad:Promocoes){
    return this.http.put(`${this.API}/Promocoes/${payLoad.id}`,payLoad);
  }

  deletePromocao(id:number){
    return this.http.delete<Promocoes>(`${this.API}/Promocoes/${id}`);
  }
}
