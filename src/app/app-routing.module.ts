import { EnderecoViewComponent } from './componentes/views/endereco-view/endereco-view.component';
import { EnderecoListComponent } from './componentes/list/endereco-list/endereco-list.component';
import { DestaqueUpdateComponent } from './componentes/update/destaque-update/destaque-update.component';
import { DestaqueCreateComponent } from './componentes/create/destaque-create/destaque-create.component';
import { DestaqueListComponent } from './componentes/list/destaque-list/destaque-list.component';
import { ContatoUpdateComponent } from './componentes/update/contato-update/contato-update.component';
import { ContatoCreateComponent } from './componentes/create/contato-create/contato-create.component';
import { ContatoListComponent } from './componentes/list/contato-list/contato-list.component';
import { SubcategoriaUpdateComponent } from './componentes/update/subcategoria-update/subcategoria-update.component';
import { SubCategoriaCreateComponent } from './componentes/create/sub-categoria-create/sub-categoria-create.component';
import { SubCategoriaListComponent } from './componentes/list/sub-categoria-list/sub-categoria-list.component';
import { CorUpdateComponent } from './componentes/update/cor-update/cor-update.component';
import { CorCreateComponent } from './componentes/create/cor-create/cor-create.component';
import { CorListComponent } from './componentes/list/cor-list/cor-list.component';
import { TamanhoUpdateComponent } from './componentes/update/tamanho-update/tamanho-update.component';
import { TamanhoCreateComponent } from './componentes/create/tamanho-create/tamanho-create.component';
import { TamanhoListComponent } from './componentes/list/tamanho-list/tamanho-list.component';
import { SingleProdSiteComponent } from './componentes/site/single-prod-site/single-prod-site.component';
import { HomeSiteComponent } from './componentes/site/home-site/home-site.component';
import { PedidoViewComponent } from './componentes/views/pedido-view/pedido-view.component';
import { CupomUpdateComponent } from './componentes/update/cupom-update/cupom-update.component';
import { CupomCreateComponent } from './componentes/create/cupom-create/cupom-create.component';
import { CupomListComponent } from './componentes/list/cupom-list/cupom-list.component';
import { UsuarioViewComponent } from './componentes/views/usuario-view/usuario-view.component';
import { UsuarioUpdateComponent } from './componentes/update/usuario-update/usuario-update.component';
import { UsuarioCreateComponent } from './componentes/create/usuario-create/usuario-create.component';
import { UsuarioListComponent } from './componentes/list/usuario-list/usuario-list.component';
import { SemelhanteUpdateComponent } from './componentes/update/semelhante-update/semelhante-update.component';
import { SemelhanteCreateComponent } from './componentes/create/semelhante-create/semelhante-create.component';
import { SemelhanteListComponent } from './componentes/list/semelhante-list/semelhante-list.component';
import { PromocaoUpdateComponent } from './componentes/update/promocao-update/promocao-update.component';
import { PromocaoCreateComponent } from './componentes/create/promocao-create/promocao-create.component';
import { ProdutoUpdateComponent } from './componentes/update/produto-update/produto-update.component';
import { ProdutoCreateComponent } from './componentes/create/produto-create/produto-create.component';
import { ProdutoListComponent } from './componentes/list/produto-list/produto-list.component';
import { PedidoUpdateComponent } from './componentes/update/pedido-update/pedido-update.component';
import { PedidoCreateComponent } from './componentes/create/pedido-create/pedido-create.component';
import { OpgUpdateComponent } from './componentes/update/opg-update/opg-update.component';
import { OpgCreateComponent } from './componentes/create/opg-create/opg-create.component';
import { OpgListComponent } from './componentes/list/opg-list/opg-list.component';
import { MarcaUpdateComponent } from './componentes/update/marca-update/marca-update.component';
import { MarcaCreateComponent } from './componentes/create/marca-create/marca-create.component';
import { MarcaListComponent } from './componentes/list/marca-list/marca-list.component';
import { LoginUpdateComponent } from './componentes/update/login-update/login-update.component';
import { LoginCreateComponent } from './componentes/create/login-create/login-create.component';
import { LoginListComponent } from './componentes/list/login-list/login-list.component';
import { FavoritoUpdateComponent } from './componentes/update/favorito-update/favorito-update.component';
import { FavoritoCreateComponent } from './componentes/create/favorito-create/favorito-create.component';
import { FavoritoListComponent } from './componentes/list/favorito-list/favorito-list.component';
import { CategoriaUpdateComponent } from './componentes/update/categoria-update/categoria-update.component';
import { CategoriaCreateComponent } from './componentes/create/categoria-create/categoria-create.component';
import { CategoriaListComponent } from './componentes/list/categoria-list/categoria-list.component';
import { BannerUpdateComponent } from './componentes/update/banner-update/banner-update.component';
import { BannerCreateComponent } from './componentes/create/banner-create/banner-create.component';
import { BannerListComponent } from './componentes/list/banner-list/banner-list.component';
import { HomeComponent } from './componentes/share/home/home.component';
import { LoginComponent } from './componentes/share/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './componentes/guards/auth-guard';
import { PedidoListComponent } from './componentes/list/pedido-list/pedido-list.component';
import { PromocaoListComponent } from './componentes/list/promocao-list/promocao-list.component';

const routes: Routes = [
  { path:'',redirectTo:'login',pathMatch:'full' },
  { path:'homeSite',component: HomeSiteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'single_prod', component: SingleProdSiteComponent},

  // Banners
  { path: 'banners', component: BannerListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'bannerCreate', component: BannerCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'bannerUpdate/:id', component: BannerUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },

  // Destaques
  { path: 'destaques', component: DestaqueListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'destaqueCreate', component: DestaqueCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'destaqueUpdate/:id', component: DestaqueUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },

  // Categoria
  { path: 'categorias', component: CategoriaListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'categoriaCreate', component: CategoriaCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'categoriaUpdate/:id', component: CategoriaUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },

  // SubCategoria
  { path: 'subCategorias', component: SubCategoriaListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'subCategoriaCreate', component: SubCategoriaCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'subCategoriaUpdate/:id', component: SubcategoriaUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },

  // Favorito
  { path: 'favoritos', component: FavoritoListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'favoritoCreate', component: FavoritoCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'favoritoUpdate/:id', component: FavoritoUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },

  // Login
  { path: 'logins', component: LoginListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'loginCreate', component: LoginCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'loginUpdate/:id', component: LoginUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },

  // Marca
  { path: 'marcas', component: MarcaListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'marcaCreate', component: MarcaCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'marcaUpdate/:id', component: MarcaUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },

  // Opg
  { path: 'opgs', component: OpgListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'opgCreate', component: OpgCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'opgUpdate/:id', component: OpgUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },

  // Pedido
  { path: 'pedidos', component: PedidoListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'pedidoCreate', component: PedidoCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'pedidoView/:id', component: PedidoViewComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },

  // Produto
  { path: 'produtos', component: ProdutoListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'produtoCreate', component: ProdutoCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'produtoUpdate/:id', component: ProdutoUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },

  // Promocao
  { path: 'promocoes', component: PromocaoListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'promocaoCreate', component: PromocaoCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'promocaoUpdate/:id', component: PromocaoUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },

  // Semelhante
  { path: 'semelhantes', component: SemelhanteListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'semelhanteCreate', component: SemelhanteCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'semelhanteUpdate/:id', component: SemelhanteUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },

  // Tamanho
  { path: 'tamanhos', component: TamanhoListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'tamanhoCreate', component: TamanhoCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'tamanhoUpdate/:id', component: TamanhoUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },

  // Cor
  { path: 'cores', component: CorListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'corCreate', component: CorCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'corUpdate/:id', component: CorUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },

  // Cupom
  { path: 'cupons', component: CupomListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'cupomCreate', component: CupomCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'cupomUpdate/:id', component: CupomUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },

  // Contato
  { path: 'contatos', component: ContatoListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'contatoCreate', component: ContatoCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'contatoUpdate/:id', component: ContatoUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },

  // Usuario
  { path: 'usuarios', component: UsuarioListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'usuarioCreate', component: UsuarioCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'usuarioView/:id', component: UsuarioViewComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },

  // Endereco
  { path: 'enderecos', component: EnderecoListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'enderecoCreate', component: UsuarioCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'enderecoView/:id', component: EnderecoViewComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
