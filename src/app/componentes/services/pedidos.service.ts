import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedidos } from '../models/pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }

  getPedido(){
    return this.http.get<Pedidos[]>("http://localhost:3000/Pedidos");
  }

  createPedido(payLoad:Pedidos){
    return this.http.post<Pedidos>("http://localhost:3000/Pedidos", payLoad);
  }

  getByIdPedido(id:number){
    return this.http.get<Pedidos>(`http://localhost:3000/Pedidos/${id}`);
  }

  updatePedido(payLoad:Pedidos){
    return this.http.put(`http://localhost:3000/Pedidos/${payLoad.id}`,payLoad);
  }

  deletePedido(id:number){
    return this.http.delete<Pedidos>(`http://localhost:3000/Pedidos/${id}`);
  }
}
