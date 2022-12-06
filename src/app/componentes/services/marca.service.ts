import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../models/marca';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getMarca(){
    return this.http.get<Marca[]>(`${this.API}/Marca`);
  }

  createMarca(payLoad:Marca){
    return this.http.post<Marca>(`${this.API}/Marca`, payLoad);
  }

  getByIdMarca(id:number){
    return this.http.get<Marca>(`${this.API}/Marca/${id}`);
  }

  updateMarca(payLoad:Marca){
    return this.http.put(`${this.API}/Marca/${payLoad.id}`,payLoad);
  }

  deleteMarca(id:number){
    return this.http.delete<Marca>(`${this.API}/Marca/${id}`);
  }
}
