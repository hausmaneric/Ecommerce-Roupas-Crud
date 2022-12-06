import { Produto } from './../models/produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getProduto(){
    return this.http.get<Produto[]>(`${this.API}/produto`);
  }

  createProduto(payLoad:Produto){
    return this.http.post<Produto>(`${this.API}/produto`, payLoad);
  }

  getByIdProduto(id:number){
    return this.http.get<Produto>(`${this.API}/produto/${id}`);
  }

  updateProduto(payLoad:Produto){
    return this.http.put(`${this.API}/produto/${payLoad.id}`,payLoad);
  }

  deleteProduto(id:number){
    return this.http.delete<Produto>(`${this.API}/produto/${id}`);
  }
}
