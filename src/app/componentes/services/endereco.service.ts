import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../models/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  constructor(private http: HttpClient) { }

  getEndereco(){
    return this.http.get<Endereco[]>("http://localhost:3000/Endereco");
  }

  createEndereco(payLoad:Endereco){
    return this.http.post<Endereco>("http://localhost:3000/Endereco", payLoad);
  }

  getByIdEndereco(id:number){
    return this.http.get<Endereco>(`http://localhost:3000/Endereco/${id}`);
  }

  updateEndereco(payLoad:Endereco){
    return this.http.put(`http://localhost:3000/Endereco/${payLoad.id}`,payLoad);
  }

  deleteEndereco(id:number){
    return this.http.delete<Endereco>(`http://localhost:3000/Endereco/${id}`);
  }
}
