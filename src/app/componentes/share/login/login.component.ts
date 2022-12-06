import { LoginService } from './../../services/login.service';
import { Login } from './../../models/login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioForm: Login ={
    id: 0,
    nome: '',
    login: '',
    senha: '',
    email: '',
    image: '',
    nivel: 0,
  }

  public loginForm: Login[] = []
  constructor( private router: Router, private loginService: LoginService) { }


  ngOnInit(): void {
  }

  login(){
    this.loginService.logar(this.usuarioForm.login, this.usuarioForm.senha);

    // this.usuarioService.getUsuario().subscribe(res=>{
    //   const user = res.find((a: any) =>{
    //     return a.login === this.usuarioForm.login && a.senha === this.usuarioForm.senha
    //   });
    //   if(user){
    //     this.Autenticado = true;
    //     this.usuarioService.mostrarMenuEmitter.emit(true);
    //     this.router.navigate(['home']);
    //   }else{
    //     alert("usuário não encontrado")
    //     this.usuarioService.mostrarMenuEmitter.emit(false);
    //   }
    // },error=>{
    //   alert("Somethin went wrong");
    // })
  };

}
