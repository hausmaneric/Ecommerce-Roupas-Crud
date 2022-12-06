import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../models/endereco';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  constructor(private http: HttpClient) { }
  private readonly API = environment.API;

  getEndereco(){
    return this.http.get<Endereco[]>(`${this.API}/Endereco`);
  }

  createEndereco(payLoad:Endereco){
    return this.http.post<Endereco>(`${this.API}/Endereco`, payLoad);
  }

  getByIdEndereco(id:number){
    return this.http.get<Endereco>(`${this.API}/Endereco/${id}`);
  }

  updateEndereco(payLoad:Endereco){
    return this.http.put(`${this.API}/Endereco/${payLoad.id}`,payLoad);
  }

  deleteEndereco(id:number){
    return this.http.delete<Endereco>(`${this.API}/Endereco/${id}`);
  }
}
