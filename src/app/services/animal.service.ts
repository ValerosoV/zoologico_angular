import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  /*atributos de la clase animal.servicios*/
  apiUri = '/api/animals';
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { 

  }

  /*metodo añadido*/
  getAllAnimalsData(): Observable<any> {
    return this.http.get<any>(this.apiUri)
  }

}
