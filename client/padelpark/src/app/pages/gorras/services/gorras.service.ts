import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gorra } from '../../../interfaces/gorra';

@Injectable({
  providedIn: 'root'
})
export class GorrasService {

  public gorras: Gorra[] = [];

  constructor(private http: HttpClient) { }

  createGorra(gorra: Gorra): Observable<any> {
    return this.http.post("http://localhost:8080/api/gorras", gorra);
  }

  getAllGorras(): Observable<any> {
    return this.http.get("http://localhost:8080/api/gorras");
  }

  deleteGorraById(id: string): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/gorras/${id}`);
  }

  getGorraById(id: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/gorras/${id}`);
  }

  updateGorraById(gorra: Gorra): Observable<any> {
    const gorraId = gorra._id;

    const { _id, ...gorraSinId } = gorra;

    return this.http.put(`http://localhost:8080/api/gorras/${gorraId}`, gorraSinId);
  }
}
