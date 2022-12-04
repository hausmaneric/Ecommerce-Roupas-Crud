import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Semelhantes } from '../models/semelhantes';

@Injectable({
  providedIn: 'root'
})
export class Semelhanteservice {

  constructor(private http: HttpClient) { }

  getSemelhante(){
    return this.http.get<Semelhantes[]>("http://localhost:3000/Semelhante");
  }

  createSemelhante(payLoad:Semelhantes){
    return this.http.post<Semelhantes>("http://localhost:3000/Semelhante", payLoad);
  }

  getByIdSemelhante(id:number){
    return this.http.get<Semelhantes>(`http://localhost:3000/Semelhante/${id}`);
  }

  updateSemelhante(payLoad:Semelhantes){
    return this.http.put(`http://localhost:3000/Semelhante/${payLoad.id}`,payLoad);
  }

  deleteSemelhante(id:number){
    return this.http.delete<Semelhantes>(`http://localhost:3000/Semelhante/${id}`);
  }


}
