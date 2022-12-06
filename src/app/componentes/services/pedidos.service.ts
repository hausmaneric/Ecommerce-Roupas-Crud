import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedidos } from '../models/pedidos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getPedido(){
    return this.http.get<Pedidos[]>(`${this.API}/Pedidos`);
  }

  createPedido(payLoad:Pedidos){
    return this.http.post<Pedidos>(`${this.API}/Pedidos`, payLoad);
  }

  getByIdPedido(id:number){
    return this.http.get<Pedidos>(`${this.API}/Pedidos/${id}`);
  }

  updatePedido(payLoad:Pedidos){
    return this.http.put(`${this.API}/Pedidos/${payLoad.id}`,payLoad);
  }

  deletePedido(id:number){
    return this.http.delete<Pedidos>(`${this.API}/Pedidos/${id}`);
  }
}
