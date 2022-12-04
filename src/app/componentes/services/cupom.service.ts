import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cupom } from '../models/cupom';

@Injectable({
  providedIn: 'root'
})
export class CupomService {

  constructor(private http: HttpClient) { }

  getCupom(){
    return this.http.get<Cupom[]>("http://localhost:3000/Cupom");
  }

  createCupom(payLoad:Cupom){
    return this.http.post<Cupom>("http://localhost:3000/Cupom", payLoad);
  }

  getByIdCupom(id:number){
    return this.http.get<Cupom>(`http://localhost:3000/Cupom/${id}`);
  }

  updateCupom(payLoad:Cupom){
    return this.http.put(`http://localhost:3000/Cupom/${payLoad.id}`,payLoad);
  }

  deleteCupom(id:number){
    return this.http.delete<Cupom>(`http://localhost:3000/Cupom/${id}`);
  }
}
