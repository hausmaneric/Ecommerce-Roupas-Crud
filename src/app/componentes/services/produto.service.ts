import { Produto } from './../models/produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getProduto(){
    return this.http.get<Produto[]>("http://localhost:3000/produto");
  }

  createProduto(payLoad:Produto){
    return this.http.post<Produto>("http://localhost:3000/produto", payLoad);
  }

  getByIdProduto(id:number){
    return this.http.get<Produto>(`http://localhost:3000/produto/${id}`);
  }

  updateProduto(payLoad:Produto){
    return this.http.put(`http://localhost:3000/produto/${payLoad.id}`,payLoad);
  }

  deleteProduto(id:number){
    return this.http.delete<Produto>(`http://localhost:3000/produto/${id}`);
  }
}
