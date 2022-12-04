import { Img_Prod } from './../../models/img_prod';
import { ImgProdService } from './../../services/img-prod.service';
import { Router } from '@angular/router';
import { Marca } from './../../models/marca';
import { MarcaService } from './../../services/marca.service';
import { ProdutoService } from './../../services/produto.service';
import { Produto } from './../../models/produto';
import {AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  allProduto: Produto[] = [];
  img: Img_Prod[] | any = [];
  array: [] | any

  constructor(private produtoservice: ProdutoService, private router: Router, private imgService: ImgProdService) { }

  deleteModal: any;
  idToDelete: number = 0;

  ngOnInit(): void {
    this.getProduto();
  }

  getProduto(){
    this.produtoservice.getProduto().subscribe((data) =>{
      this.allProduto = data;
    })
  }

  openDeleteModal(id:number){
    this.idToDelete = id;
    this.deleteModal.show();
  }

  getImage(id:number){
    this.imgService.searchImageProduct(id).subscribe((data) =>{
      this.img = data;
      // this.imgService.deleteImage(data.id).subscribe((data)=>{
      //   console.log(data)
      // })
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.produtoservice.deleteProduto(id).subscribe(res=>{
        this.imgService.searchImageProduct(id).subscribe((data)=>{
          this.array = data
          for (let index = 0; index < this.array.length; index++) {
            const element = this.array[index].id;
            console.log(element)
            this.imgService.deleteImage(element).subscribe((data)=>{
              console.log(element)
           })
          }

        })
        this.getProduto();
        })

    }
  }
}



