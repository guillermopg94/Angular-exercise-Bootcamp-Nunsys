import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from './articulo.model';
import { IArticulo } from './ariculos.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(
    private http: HttpClient
  ) { }



public obtenerArticulos():Observable<IArticulo[]>{
const urlEnpoint: string = "http://localhost:3001/";
return this.http.get<IArticulo[]>(urlEnpoint);
}

}
