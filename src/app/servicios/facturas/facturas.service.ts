import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facturas } from 'src/app/models/facturas/facturas';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

    private baseURL = "http://localhost:8080/api/v1/facturas"
    constructor(private httpClient: HttpClient){  }

    listarFacturas():Observable<Facturas[]> {
      return this.httpClient.get<Facturas[]>(`${this.baseURL}`);
    }
    getFacturaById(id:Number):Observable<Facturas> {
      return this.httpClient.get<Facturas>(`${this.baseURL}/buscarporid/${id}`);
    }
  
}
