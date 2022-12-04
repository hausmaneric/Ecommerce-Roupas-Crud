import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  getContato(){
    return this.http.get<Contato[]>("http://localhost:3000/Contato");
  }

  createContato(payLoad:Contato){
    return this.http.post<Contato>("http://localhost:3000/Contato", payLoad);
  }

  getByIdContato(id:number){
    return this.http.get<Contato>(`http://localhost:3000/Contato/${id}`);
  }

  updateContato(payLoad:Contato){
    return this.http.put(`http://localhost:3000/Contato/${payLoad.id}`,payLoad);
  }

  deleteContato(id:number){
    return this.http.delete<Contato>(`http://localhost:3000/Contato/${id}`);
  }
}
