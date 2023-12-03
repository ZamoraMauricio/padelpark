import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { switchMap } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class RaquetasService {
  public raquetas: Product[] = [];
  constructor(private http: HttpClient) {
  }
  
  fetchRaquetasFromApi(searchTerm: string): Observable<any> {
    return this.http.get(`http://localhost:8082/api/raquetas?searchTerm=${searchTerm}`);
}

  getRaquetasFromDB(): Observable<Array<Product>>{
    return this.http.get<Array<Product>>(
      "http://localhost:8082/api/raquetas?searchTerm=${searchTerm}"
    )
  }
  getGorrasFromDB(): Observable<Array<Product>>{
    return this.http.get<Array<Product>>(
      "http://localhost:8082/api/gorras/"
    )
  }
  getCategories(): Observable<Array<string>>{
    return this.http.get<Array<string>>("http://localhost:8082/api/categories/");
  }
}
