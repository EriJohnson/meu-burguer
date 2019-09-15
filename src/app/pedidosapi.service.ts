import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosapiService {

  url : string = 'https://demo2086865.mockable.io/pedidos';

  constructor(public http : HttpClient) {
    console.log('Hello PedidosService')
  }

    obterPedidos(){

      return this.http.get<Object[]>(this.url);

    }    

}
