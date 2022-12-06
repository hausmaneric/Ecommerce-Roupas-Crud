import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contato } from '../models/contato';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getContato(){
    return this.http.get<Contato[]>(`${this.API}/Contato`);
  }

  createContato(payLoad:Contato){
    return this.http.post<Contato>(`${this.API}/Contato`, payLoad);
  }

  getByIdContato(id:number){
    return this.http.get<Contato>(`${this.API}/Contato/${id}`);
  }

  updateContato(payLoad:Contato){
    return this.http.put(`${this.API}/Contato/${payLoad.id}`,payLoad);
  }

  deleteContato(id:number){
    return this.http.delete<Contato>(`${this.API}/Contato/${id}`);
  }
}
