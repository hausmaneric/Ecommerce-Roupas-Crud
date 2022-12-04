import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opg } from '../models/opg';

@Injectable({
  providedIn: 'root'
})
export class OpgService {

  constructor(private http: HttpClient) { }

  getOpg(){
    return this.http.get<Opg[]>("http://localhost:3000/Opg");
  }

  createOpg(payLoad:Opg){
    return this.http.post<Opg>("http://localhost:3000/Opg", payLoad);
  }

  getByIdOpg(id:number){
    return this.http.get<Opg>(`http://localhost:3000/Opg/${id}`);
  }

  updateOpg(payLoad:Opg){
    return this.http.put(`http://localhost:3000/Opg/${payLoad.id}`,payLoad);
  }

  deleteOpg(id:number){
    return this.http.delete<Opg>(`http://localhost:3000/Opg/${id}`);
  }
}
