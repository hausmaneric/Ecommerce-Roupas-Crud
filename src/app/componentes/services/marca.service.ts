import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../models/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http: HttpClient) { }

  getMarca(){
    return this.http.get<Marca[]>("http://localhost:3000/Marca");
  }

  createMarca(payLoad:Marca){
    return this.http.post<Marca>("http://localhost:3000/Marca", payLoad);
  }

  getByIdMarca(id:number){
    return this.http.get<Marca>(`http://localhost:3000/Marca/${id}`);
  }

  updateMarca(payLoad:Marca){
    return this.http.put(`http://localhost:3000/Marca/${payLoad.id}`,payLoad);
  }

  deleteMarca(id:number){
    return this.http.delete<Marca>(`http://localhost:3000/Marca/${id}`);
  }
}
