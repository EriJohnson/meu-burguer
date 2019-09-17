import { Component, OnInit } from '@angular/core';
import { PedidosapiService } from '../pedidosapi.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})

export class PedidoPage implements OnInit {

  hamburguer : string = '';
  bebida : string = '';
  acompanhamento : string = '';

  constructor(public pedidoService: PedidosapiService) {

   }

  ngOnInit() {
  }

  fazerPedido(){
    var novo = {
      hamburger : this.hamburguer,
      valor : ''
    }

    this.pedidoService.fazerPedido(novo)
    .subscribe()
  }

  

}
