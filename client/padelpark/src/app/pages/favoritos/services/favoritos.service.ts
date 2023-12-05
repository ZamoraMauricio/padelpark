import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favorito } from '../../../interfaces/favoritos';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  public favs: Favorito[] = [];

  constructor(private http: HttpClient) { }

  createFav(fav: Favorito): Observable<any> {
    return this.http.post("http://localhost:8080/api/favoritos", fav);
  }

  getAllFavs(): Observable<any> {
    return this.http.get("http://localhost:8080/api/favoritos");
  }

  deleteFavById(id: string): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/favoritos/${id}`);
  }

  getFavById(id: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/favoritos/${id}`);
  }

}
