import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opg } from '../models/opg';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpgService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getOpg(){
    return this.http.get<Opg[]>(`{this.API}/Opg`);
  }

  createOpg(payLoad:Opg){
    return this.http.post<Opg>(`{this.API}/Opg`, payLoad);
  }

  getByIdOpg(id:number){
    return this.http.get<Opg>(`{this.API}/Opg/${id}`);
  }

  updateOpg(payLoad:Opg){
    return this.http.put(`{this.API}/Opg/${payLoad.id}`,payLoad);
  }

  deleteOpg(id:number){
    return this.http.delete<Opg>(`{this.API}/Opg/${id}`);
  }
}
