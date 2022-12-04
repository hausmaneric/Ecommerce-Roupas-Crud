import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../models/categoria';
import { Cor } from '../../models/cor';
import { Img_Prod } from '../../models/img_prod';
import { Marca } from '../../models/marca';
import { Produto } from '../../models/produto';
import { Promocoes } from '../../models/promocoes';
import { Semelhantes } from '../../models/semelhantes';
import { SubCategoria } from '../../models/sub-categoria';
import { Tamanho } from '../../models/tamanho';
import { CategoriaService } from '../../services/categoria.service';
import { CorService } from '../../services/cor.service';
import { ImgProdService } from '../../services/img-prod.service';
import { MarcaService } from '../../services/marca.service';
import { ProdutoService } from '../../services/produto.service';
import { Promocaoservice } from '../../services/promocao.service';
import { Semelhanteservice } from '../../services/semelhantes.service';
import { SubcategoriaService } from '../../services/subcategoria.service';
import { TamanhoService } from '../../services/tamanho.service';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {
  categoria: Categoria[] = [];
  marca: Marca[] = [];
  cor: Cor[] = [];
  tamanho:Tamanho[]= [];
  subCategoria:SubCategoria[]= [];
  semelhantes: Semelhantes[] = [];
  promocao: Promocoes[] = [];
  img: Img_Prod[] | any = [];
  produtoForm: Produto ={
    id: 0,
    nome: "",
    descricao: "",
    marca_id:0,
    marca: "",
    categoria_id: 0,
    promocao_id:0,
    favorito_id: 0,
    semelhante_id: 0,
    preco: 0,
    promocao: "",
    promo:false,
    quantidade: 0,
    vendidos: 0,
    avalicao: 0,
    image_principal: "",
    images: "",
    semelhante:"",
    categoria:"",
    promocaoValor: 0,
    cor_id:0,
    cor:"",
    tamanho_id:0,
    tamanho:"",
    subcategoria_id:0,
    subcategoria:"",
  }
  imgForm: Img_Prod = {
    id: 0,
    image: "",
    prod_id: this.produtoForm.id
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private produtoService: ProdutoService,private corService:CorService,private tamanhoService: TamanhoService,private subcategoriaService:SubcategoriaService , private _formBuilder: FormBuilder, private route: ActivatedRoute, private imgService: ImgProdService ,private categoriaService: CategoriaService, private marcaService: MarcaService, private semelhantesService: Semelhanteservice, private promocaoService: Promocaoservice, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdProduto(id);
      this.getImage(id);
    })

    this.getMarca();
    this.getCategoria();
    this.getSemelhante();
    this.getPromocao();
    this.getCor();
    this.getTamanho();
    this.getSubcategoria()
  }

  getCategoria(){
    this.categoriaService.getCategoria().subscribe((data) =>{
      this.categoria = data;
    })
  }

  getSubcategoria(){
    this.subcategoriaService.getSubCategoria().subscribe((data) =>{
      this.subCategoria = data;
    })
  }

  getTamanho(){
    this.tamanhoService.getTamanho().subscribe((data) =>{
      this.tamanho = data;
    })
  }

  getCor(){
    this.corService.getCor().subscribe((data) =>{
      this.cor = data;
    })
  }

  getMarca(){
    this.marcaService.getMarca().subscribe((data) =>{
      this.marca = data;
    })
  }

  getPromocao(){
    this.promocaoService.getPromocao().subscribe((data) =>{
      this.promocao = data;
    })
  }

  getSemelhante(){
    this.semelhantesService.getSemelhante().subscribe((data) =>{
      this.semelhantes = data;
    })
  }

  getImage(id:number){
    this.imgService.searchImageProduct(id).subscribe((data) =>{
      this.img = data;
    })
  }

  createImage(){
    this.imgService.createImage(this.imgForm).subscribe({
      next:(data) => {
      this.getImage(data.prod_id)
      },error: (error) =>{
        console.log(error);
      }
    })
  }

  onDeleteImage(id:number, prod_id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.imgService.deleteImage(id).subscribe(res=>{
        this.getImage(prod_id)
      })
    }
  }

  getByIdProduto(id:number){
    this.produtoService.getByIdProduto(id).subscribe((data) => {
      this.produtoForm = data
    })
  }

  selectMarca(){
    let nomeMarca!:string
    if(this.produtoForm.marca_id == 0){
      this.produtoForm.marca = ""
    }else{
      this.marcaService.getByIdMarca(this.produtoForm.marca_id).subscribe((data)=>{
        nomeMarca = data.nome
      })
      setTimeout(() => {
        this.produtoForm.marca = nomeMarca
      }, 1000);
    }
  }

  selectCategoria(){
    let nomeCategoria:string
    if(this.produtoForm.categoria_id == 0){
      this.produtoForm.categoria = ""
    }else{
      this.categoriaService.getByIdCategoria(this.produtoForm.categoria_id).subscribe((data)=>{
        nomeCategoria = data.nome
      })
      setTimeout(() => {
        this.produtoForm.categoria = nomeCategoria
      }, 1000);
    }
  }

  selectCor(){
    let nomeCor:string
    if(this.produtoForm.cor_id == 0){
      this.produtoForm.cor = ""
    }else{
      this.corService.getByIdCor(this.produtoForm.cor_id).subscribe((data)=>{
        nomeCor = data.titulo
      })
      setTimeout(() => {
        this.produtoForm.cor = nomeCor
      }, 1000);
    }
  }

  selectSubcategoria(){
    let nomeSubcategoria!:string
    if(this.produtoForm.subcategoria_id == 0){
      this.produtoForm.subcategoria = ""
    }else{
      this.subcategoriaService.getByIdSubCategoria(this.produtoForm.subcategoria_id).subscribe((data)=>{
        nomeSubcategoria = data.titulo
      })
      setTimeout(() => {
        this.produtoForm.subcategoria = nomeSubcategoria
      }, 1000);
    }
  }

  selectTamanho(){
    let nomeTamanho:string
    if(this.produtoForm.tamanho_id == 0){
      this.produtoForm.tamanho = ""
    }else{
      this.corService.getByIdCor(this.produtoForm.tamanho_id).subscribe((data)=>{
        nomeTamanho = data.titulo
      })
      setTimeout(() => {
        this.produtoForm.tamanho = nomeTamanho
      }, 1000);
    }
  }

  selectPromocao(){
    let nomePromocao!:string
    let taxa!: number
    let promo!: boolean
    if(this.produtoForm.promocao_id == 0){
      this.produtoForm.promocaoValor = 0
    }else{
      this.promocaoService.getByIdPromocao(this.produtoForm.promocao_id).subscribe((data)=>{
        nomePromocao = data.nome
        taxa = data.taxa
        promo = true
      })
      setTimeout(() => {
        this.produtoForm.promocaoValor = this.produtoForm.preco - ((this.produtoForm.preco * taxa)/100)
        this.produtoForm.promocao = nomePromocao
        this.produtoForm.promo = promo
      }, 1000);
    }
  }

  selectSemelhante(){
    let nomeSemelhante!:string
    if(this.produtoForm.semelhante_id == 0){
      this.produtoForm.semelhante = ""
    }else{
      this.semelhantesService.getByIdSemelhante(this.produtoForm.semelhante_id).subscribe((data)=>{
        nomeSemelhante = data.nome
      })
      setTimeout(() => {
        this.produtoForm.semelhante = nomeSemelhante
      }, 1000);
    }
  }

  updateProduto(){
    this.selectSubcategoria();
    this.selectTamanho();
    this.selectCor();
    this.selectMarca()
    this.selectSemelhante()
    this.selectPromocao()
    this.selectCategoria()
    setTimeout(() => {
      this.produtoService.updateProduto(this.produtoForm).subscribe({
        next:(data) => {
          // this.router.navigate(["produtos"]);
        },error:(error)=>{
          console.log(error);
        }
      })
    }, 1000);
  }

  gotoList() {
    this.router.navigate(['/produtos']);
  }

}
