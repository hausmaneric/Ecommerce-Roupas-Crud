import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';import { Observable } from 'rxjs';
import { Favorito } from '../models/favorito';


@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  constructor(private httpClient: HttpClient) { }

  createFavorite(favoriteBody: any):Observable<Favorito>{
    const baseUrl="http://localhost:3000/favorito";
    return this.httpClient.post<Favorito>(baseUrl, favoriteBody);
  }

  viewFavorite(categoryId?:any):Observable<Favorito>{
    const baseUrl="http://localhost:3000/favorito/"+categoryId;
    return this.httpClient.get<Favorito>(baseUrl);
  }

  viewFavorites():Observable<Favorito>{
    const baseUrl="http://localhost:3000/favorito/";
    return this.httpClient.get<Favorito>(baseUrl);
  }

  updateFavorite(favoriteId:string,favoriteBody: string):Observable<Favorito>{
    const baseUrl="http://localhost:3000/favorito/"+favoriteId;
    return this.httpClient.put<Favorito>(baseUrl,favoriteBody);
  }

  deleteFavorite(FavoriteId:string):Observable<Favorito>{
    const baseUrl="http://localhost:3000/favorito/"+FavoriteId;
    return this.httpClient.delete<Favorito>(baseUrl);
  }

  getFavorite(){
    const baseUrl="http://localhost:3000/favorito";
    return this.httpClient.get<Favorito>(baseUrl)
  }
}
