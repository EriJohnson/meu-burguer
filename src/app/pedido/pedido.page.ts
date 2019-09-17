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
      bebida : this.bebida,
      acompanhamento: this.acompanhamento
    }

    this.pedidoService.fazerPedido(novo)
    .subscribe()
  }

  

}
