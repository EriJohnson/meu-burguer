import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosapiService {

  url : string = 'https://my-json-server.typicode.com/EriJohnson/fakeapi/pedidos';

  constructor(public http : HttpClient) {
    console.log('Hello PedidosService')
  }

    obterPedidos(){

      return this.http.get<Object[]>(this.url);

    }    

    fazerPedido(novo){
      return this.http.post(this.url, novo);
      
    }    

}
