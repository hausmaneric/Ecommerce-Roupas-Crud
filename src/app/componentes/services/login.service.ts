import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private API = environment.API;

  public Autenticado: boolean = false;

  usuario!: Login;

  mostrarMenuEmitter = new EventEmitter<boolean>();
  mostrarNome = new EventEmitter<string>();
  mostrarImg = new EventEmitter<string>();
  nome!: string;

  constructor(private http: HttpClient, private router: Router) {
   }

  createLogin(payLoad:Login){
    return this.http.post<Login>(`${this.API}/Login`, payLoad);
  }

  getByIdLogin(id:number){
    return this.http.get<Login>(`${this.API}/Login/${id}`);
  }

  updateLogin(payLoad:Login){
    return this.http.put(`${this.API}/Login/${payLoad.id}`,payLoad);
  }

  deleteLogin(id:number){
    return this.http.delete<Login>(`${this.API}/Login/${id}`);
  }

  getLogin(){
    return this.http.get<Login[]>(`${this.API}/Login`);
  }

  logar(login: string, senha: string){
    this.getLogin().subscribe(res=>{
      const user = res.find((a: any) =>{
        return a.login === login && a.senha === senha
      });
      if(user){
        this.Autenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.nome = user.nome;
        this.mostrarNome.emit(this.nome);
        this.mostrarImg.emit(user.image)

        this.router.navigate(['home']);
      }else{
        alert(`usuário não encontrado`)
        this.mostrarMenuEmitter.emit(false);
      }
    },error=>{
      alert(`Somethin went wrong`);
    })
  }

  usuarioAutenticado(){
    return this.Autenticado;
  }
}
