import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cupom } from '../models/cupom';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CupomService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  getCupom(){
    return this.http.get<Cupom[]>(`${this.API}/Cupom`);
  }

  createCupom(payLoad:Cupom){
    return this.http.post<Cupom>(`${this.API}/Cupom`, payLoad);
  }

  getByIdCupom(id:number){
    return this.http.get<Cupom>(`${this.API}/Cupom/${id}`);
  }

  updateCupom(payLoad:Cupom){
    return this.http.put(`${this.API}/Cupom/${payLoad.id}`,payLoad);
  }

  deleteCupom(id:number){
    return this.http.delete<Cupom>(`${this.API}/Cupom/${id}`);
  }
}
