import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';import { Observable } from 'rxjs';
import { Favorito } from '../models/favorito';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  private readonly API = environment.API;

  constructor(private httpClient: HttpClient) { }

  createFavorite(favoriteBody: any):Observable<Favorito>{
    const baseUrl=`${this.API}/favorito`;
    return this.httpClient.post<Favorito>(baseUrl, favoriteBody);
  }

  viewFavorite(categoryId?:any):Observable<Favorito>{
    const baseUrl=`${this.API}/favorito/`+categoryId;
    return this.httpClient.get<Favorito>(baseUrl);
  }

  viewFavorites():Observable<Favorito>{
    const baseUrl=`${this.API}/favorito/`;
    return this.httpClient.get<Favorito>(baseUrl);
  }

  updateFavorite(favoriteId:string,favoriteBody: string):Observable<Favorito>{
    const baseUrl=`${this.API}/favorito/`+favoriteId;
    return this.httpClient.put<Favorito>(baseUrl,favoriteBody);
  }

  deleteFavorite(FavoriteId:string):Observable<Favorito>{
    const baseUrl=`${this.API}/favorito/`+FavoriteId;
    return this.httpClient.delete<Favorito>(baseUrl);
  }

  getFavorite(){
    const baseUrl=`${this.API}/favorito`;
    return this.httpClient.get<Favorito>(baseUrl)
  }
}
