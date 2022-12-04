import { Usuario } from './../../models/usuario';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-view',
  templateUrl: './usuario-view.component.html',
  styleUrls: ['./usuario-view.component.css']
})
export class UsuarioViewComponent implements OnInit {
  usuarioForm: Usuario={
    id:0,
    nome: "",
    email: "",
    rua: "",
    estado: "",
    cidade: "",
    numero: "",
    telefone: 0,
    cep: 0,
    complemento: "",
    image: "",
    senha: "",
    login:""
  }

  constructor(private usaurioService: UsuarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdUsuario(id);
    })
  }

  getByIdUsuario(id:number){
    this.usaurioService.getByIdUsuario(id).subscribe((data) => {
      this.usuarioForm = data
    })
  }

  gotoList(){
    this.router.navigate(['/usuarios']);
  }

}
