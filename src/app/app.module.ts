import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OpgCreateComponent } from './componentes/create/opg-create/opg-create.component';
import { UsuarioCreateComponent } from './componentes/create/usuario-create/usuario-create.component';
import { BannerCreateComponent } from './componentes/create/banner-create/banner-create.component';
import { CategoriaCreateComponent } from './componentes/create/categoria-create/categoria-create.component';
import { FavoritoCreateComponent } from './componentes/create/favorito-create/favorito-create.component';
import { MarcaCreateComponent } from './componentes/create/marca-create/marca-create.component';
import { PedidoCreateComponent } from './componentes/create/pedido-create/pedido-create.component';
import { ProdutoCreateComponent } from './componentes/create/produto-create/produto-create.component';
import { PromocaoCreateComponent } from './componentes/create/promocao-create/promocao-create.component';
import { SemelhanteCreateComponent } from './componentes/create/semelhante-create/semelhante-create.component';
import { UsuarioListComponent } from './componentes/list/usuario-list/usuario-list.component';
import { SemelhanteListComponent } from './componentes/list/semelhante-list/semelhante-list.component';
import { PromocaoListComponent } from './componentes/list/promocao-list/promocao-list.component';
import { ProdutoListComponent } from './componentes/list/produto-list/produto-list.component';
import { PedidoListComponent } from './componentes/list/pedido-list/pedido-list.component';
import { OpgListComponent } from './componentes/list/opg-list/opg-list.component';
import { MarcaListComponent } from './componentes/list/marca-list/marca-list.component';
import { FavoritoListComponent } from './componentes/list/favorito-list/favorito-list.component';
import { CategoriaListComponent } from './componentes/list/categoria-list/categoria-list.component';
import { BannerListComponent } from './componentes/list/banner-list/banner-list.component';
import { BannerUpdateComponent } from './componentes/update/banner-update/banner-update.component';
import { CategoriaUpdateComponent } from './componentes/update/categoria-update/categoria-update.component';
import { FavoritoUpdateComponent } from './componentes/update/favorito-update/favorito-update.component';
import { MarcaUpdateComponent } from './componentes/update/marca-update/marca-update.component';
import { OpgUpdateComponent } from './componentes/update/opg-update/opg-update.component';
import { PedidoUpdateComponent } from './componentes/update/pedido-update/pedido-update.component';
import { ProdutoUpdateComponent } from './componentes/update/produto-update/produto-update.component';
import { PromocaoUpdateComponent } from './componentes/update/promocao-update/promocao-update.component';
import { SemelhanteUpdateComponent } from './componentes/update/semelhante-update/semelhante-update.component';
import { UsuarioUpdateComponent } from './componentes/update/usuario-update/usuario-update.component';
import { HomeComponent } from './componentes/share/home/home.component';
import { NavComponent } from './componentes/share/nav/nav.component';
import { HeaderComponent } from './componentes/share/header/header.component';
import { FooterComponent } from './componentes/share/footer/footer.component';
import { LoginComponent } from './componentes/share/login/login.component';
import { LoginUpdateComponent } from './componentes/update/login-update/login-update.component';
import { LoginListComponent } from './componentes/list/login-list/login-list.component';
import { LoginCreateComponent } from './componentes/create/login-create/login-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UsuarioViewComponent } from './componentes/views/usuario-view/usuario-view.component';
import { PedidoViewComponent } from './componentes/views/pedido-view/pedido-view.component';
import { CupomListComponent } from './componentes/list/cupom-list/cupom-list.component';
import { CupomUpdateComponent } from './componentes/update/cupom-update/cupom-update.component';
import { CupomCreateComponent } from './componentes/create/cupom-create/cupom-create.component';
import { MatNativeDateModule } from '@angular/material/core';
import { HomeSiteComponent } from './componentes/site/home-site/home-site.component';
import { HeaderSiteComponent } from './componentes/site/header-site/header-site.component';
import { NavSiteComponent } from './componentes/site/nav-site/nav-site.component';
import { SlideSiteComponent } from './componentes/site/slide-site/slide-site.component';
import { ProdVendSiteComponent } from './componentes/site/prod-vend-site/prod-vend-site.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CategoriasSiteComponent } from './componentes/site/categorias-site/categorias-site.component';
import { PromocoesSiteComponent } from './componentes/site/promocoes-site/promocoes-site.component';
import { MarcasSiteComponent } from './componentes/site/marcas-site/marcas-site.component';
import { DestaquesSiteComponent } from './componentes/site/destaques-site/destaques-site.component';
import { FooterSiteComponent } from './componentes/site/footer-site/footer-site.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SingleProdSiteComponent } from './componentes/site/single-prod-site/single-prod-site.component';
import { TamanhoListComponent } from './componentes/list/tamanho-list/tamanho-list.component';
import { TamanhoCreateComponent } from './componentes/create/tamanho-create/tamanho-create.component';
import { TamanhoUpdateComponent } from './componentes/update/tamanho-update/tamanho-update.component';
import { CorListComponent } from './componentes/list/cor-list/cor-list.component';
import { CorCreateComponent } from './componentes/create/cor-create/cor-create.component';
import { CorUpdateComponent } from './componentes/update/cor-update/cor-update.component';
import { SubCategoriaListComponent } from './componentes/list/sub-categoria-list/sub-categoria-list.component';
import { SubCategoriaCreateComponent } from './componentes/create/sub-categoria-create/sub-categoria-create.component';
import { SubcategoriaUpdateComponent } from './componentes/update/subcategoria-update/subcategoria-update.component';
import { ContatoListComponent } from './componentes/list/contato-list/contato-list.component';
import { ContatoCreateComponent } from './componentes/create/contato-create/contato-create.component';
import { ContatoUpdateComponent } from './componentes/update/contato-update/contato-update.component';
import { DestaqueListComponent } from './componentes/list/destaque-list/destaque-list.component';
import { DestaqueCreateComponent } from './componentes/create/destaque-create/destaque-create.component';
import { DestaqueUpdateComponent } from './componentes/update/destaque-update/destaque-update.component';
import { EnderecoListComponent } from './componentes/list/endereco-list/endereco-list.component';
import { EnderecoViewComponent } from './componentes/views/endereco-view/endereco-view.component';

@NgModule({
  declarations: [
    AppComponent,
    OpgCreateComponent,
    UsuarioCreateComponent,
    BannerCreateComponent,
    CategoriaCreateComponent,
    FavoritoCreateComponent,
    MarcaCreateComponent,
    PedidoCreateComponent,
    ProdutoCreateComponent,
    PromocaoCreateComponent,
    SemelhanteCreateComponent,
    UsuarioListComponent,
    SemelhanteListComponent,
    PromocaoListComponent,
    ProdutoListComponent,
    PedidoListComponent,
    OpgListComponent,
    MarcaListComponent,
    FavoritoListComponent,
    CategoriaListComponent,
    BannerListComponent,
    BannerUpdateComponent,
    CategoriaUpdateComponent,
    FavoritoUpdateComponent,
    MarcaUpdateComponent,
    OpgUpdateComponent,
    PedidoUpdateComponent,
    ProdutoUpdateComponent,
    PromocaoUpdateComponent,
    SemelhanteUpdateComponent,
    UsuarioUpdateComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoginUpdateComponent,
    LoginListComponent,
    LoginCreateComponent,
    UsuarioViewComponent,
    PedidoViewComponent,
    CupomListComponent,
    CupomUpdateComponent,
    CupomCreateComponent,
    HomeSiteComponent,
    HeaderSiteComponent,
    NavSiteComponent,
    SlideSiteComponent,
    ProdVendSiteComponent,
    CategoriasSiteComponent,
    PromocoesSiteComponent,
    MarcasSiteComponent,
    DestaquesSiteComponent,
    FooterSiteComponent,
    SingleProdSiteComponent,
    TamanhoListComponent,
    TamanhoCreateComponent,
    TamanhoUpdateComponent,
    CorListComponent,
    CorCreateComponent,
    CorUpdateComponent,
    SubCategoriaListComponent,
    SubCategoriaCreateComponent,
    SubcategoriaUpdateComponent,
    ContatoListComponent,
    ContatoCreateComponent,
    ContatoUpdateComponent,
    DestaqueListComponent,
    DestaqueCreateComponent,
    DestaqueUpdateComponent,
    EnderecoListComponent,
    EnderecoViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatTooltipModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
