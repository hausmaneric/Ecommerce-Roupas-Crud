import { PedidosService } from './../../services/pedidos.service';
import { Pedidos } from './../../models/pedidos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css']
})
export class PedidoListComponent implements OnInit {
  allPedidos: Pedidos[] = [];

  constructor(private pedidoService: PedidosService, private router: Router) { }

  ngOnInit(): void {
    this.getCupom();
  }

  getCupom(){
    this.pedidoService.getPedido().subscribe((data) =>{
      this.allPedidos = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.pedidoService.deletePedido(id).subscribe(res=>{
        this.getCupom();
      })
    }
  }
}
