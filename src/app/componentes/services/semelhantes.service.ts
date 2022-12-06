import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Semelhantes } from '../models/semelhantes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Semelhanteservice {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getSemelhante(){
    return this.http.get<Semelhantes[]>(`${this.API}/Semelhante`);
  }

  createSemelhante(payLoad:Semelhantes){
    return this.http.post<Semelhantes>(`${this.API}/Semelhante`, payLoad);
  }

  getByIdSemelhante(id:number){
    return this.http.get<Semelhantes>(`${this.API}/Semelhante/${id}`);
  }

  updateSemelhante(payLoad:Semelhantes){
    return this.http.put(`${this.API}/Semelhante/${payLoad.id}`,payLoad);
  }

  deleteSemelhante(id:number){
    return this.http.delete<Semelhantes>(`${this.API}/Semelhante/${id}`);
  }


}
