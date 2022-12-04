import { Endereco } from './../../models/endereco';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecoService } from '../../services/endereco.service';

@Component({
  selector: 'app-endereco-view',
  templateUrl: './endereco-view.component.html',
  styleUrls: ['./endereco-view.component.css']
})
export class EnderecoViewComponent implements OnInit {

  enderecoForm: Endereco={
    id:0,
    cliente_id:0,
    cliente:"",
    rua:"",
    estado:"",
    cidade:"",
    complemento:"",
    numero:"",
    cep:0
  }

  constructor(private enderecoService: EnderecoService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdEndereco(id);
    })
  }

  getByIdEndereco(id:number){
    this.enderecoService.getByIdEndereco(id).subscribe((data) => {
      this.enderecoForm = data
    })
  }

  gotoList(){
    this.router.navigate(['/enderecos']);
  }
}
