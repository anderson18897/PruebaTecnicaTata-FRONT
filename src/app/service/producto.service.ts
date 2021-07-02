import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exchange } from '../models/producto';
import { ExchangeRequest } from '../models/ExchangeRequest';
import { ExchangeResponse } from '../models/ExchangeResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL = 'http://localhost:8095/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Exchange[]> {
    return this.httpClient.get<Exchange[]>(this.productoURL + 'show');
  }

  public detail(id: number): Observable<Exchange> {
    return this.httpClient.get<Exchange>(this.productoURL + `detail/${id}`);
  }

  public save(exchange: Exchange): Observable<any> {
    return this.httpClient.post<any>(this.productoURL + 'create-exchange', exchange);
  }

  public update(id: number, exchange: Exchange): Observable<any> {
    return this.httpClient.post<any>(this.productoURL + `update-exchange/${id}`, exchange);
  }

  public calculate(exchangeRequest: ExchangeRequest): Observable<any> {
    return this.httpClient.post<ExchangeResponse>(this.productoURL + 'exchange', exchangeRequest);
  }

}
