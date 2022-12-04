import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuario(){
    return this.http.get<Usuario[]>("http://localhost:3000/usuario");
  }

  createUsuario(payLoad:Usuario){
    return this.http.post<Usuario>("http://localhost:3000/usuario", payLoad);
  }

  getByIdUsuario(id:number){
    return this.http.get<Usuario>(`http://localhost:3000/usuario/${id}`);
  }

  updateUsuario(payLoad:Usuario){
    return this.http.put(`http://localhost:3000/usuario/${payLoad.id}`,payLoad);
  }

  deleteUsuario(id:number){
    return this.http.delete<Usuario>(`http://localhost:3000/usuario/${id}`);
  }

}
