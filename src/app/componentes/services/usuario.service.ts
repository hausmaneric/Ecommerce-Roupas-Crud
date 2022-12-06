import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getUsuario(){
    return this.http.get<Usuario[]>(`${this.API}/usuario`);
  }

  createUsuario(payLoad:Usuario){
    return this.http.post<Usuario>(`${this.API}/usuario`, payLoad);
  }

  getByIdUsuario(id:number){
    return this.http.get<Usuario>(`${this.API}/usuario/${id}`);
  }

  updateUsuario(payLoad:Usuario){
    return this.http.put(`${this.API}/usuario/${payLoad.id}`,payLoad);
  }

  deleteUsuario(id:number){
    return this.http.delete<Usuario>(`${this.API}/usuario/${id}`);
  }

}
