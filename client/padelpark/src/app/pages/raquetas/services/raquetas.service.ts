import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Raqueta } from 'src/app/interfaces/raqueta';

@Injectable({
  providedIn: 'root'
})
export class RaquetasService {

  public raquetas: Raqueta[] = [];
  public favs: any[] = [];

  constructor(private http: HttpClient) { }

  getFavs(idUser: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/favoritos/${idUser}`);
  }

  deleteFavorite(item: { idUser: string; idProduct: string, category: String }): Observable<any> {
    console.log(item);
    return this.http.delete(`http://localhost:8080/api/favoritos/`, {body:item});
  }

  createRaqueta(raqueta: Raqueta): Observable<any> {
    return this.http.post("http://localhost:8080/api/raquetas", raqueta);
  }

  getAllRaquetas(): Observable<any> {
    return this.http.get("http://localhost:8080/api/raquetas");
  }

  deleteRaquetaById(id: string): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/raquetas/${id}`);
  }

  getRaquetaById(id: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/raquetas/${id}`);
  }

  updateRaquetaById(raqueta: Raqueta): Observable<any> {
    const raquetaId = raqueta._id;

    const { _id, ...raquetaSinId } = raqueta;

    return this.http.put(`http://localhost:8080/api/raquetas/${raquetaId}`, raquetaSinId);
  }

  saveFav(item: { idUser: string; idProduct: string, category: String }): Observable<any> {
    return this.http.post("http://localhost:8080/api/favoritos", item);
  }
}
