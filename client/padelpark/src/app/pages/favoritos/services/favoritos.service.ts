import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favorito } from '../../../interfaces/favoritos';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  public favs: any[] = [];
  public ra: any[] = [];
  public go: any[] = [];

  constructor(private http: HttpClient) { }

  getFavs(idUser: string): Observable<any> {
    
    return this.http.get(`http://localhost:8080/api/favoritos/${idUser}`);
  }

  getFavsData(favsIds: string[]): Observable<any> {
    return this.http.get(`http://localhost:8080/api/favoritos/data/${favsIds}`, );
  }

  deleteFavorite(item: { idUser: string; idProduct: string, category: String }): Observable<any> {
    console.log(item);
    return this.http.delete(`http://localhost:8080/api/favoritos/`, {body:item});
  }


 

}
