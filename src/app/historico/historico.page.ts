import { Component, OnInit } from '@angular/core';
import { PedidosapiService } from '../pedidosapi.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  pedidos: Object[];

  constructor(public pedidoService: PedidosapiService) {
    this.pedidoService.obterPedidos()
      .subscribe(
      data => {
                this.pedidos = data;
                console.log(this.pedidos);
              },
      erro => console.log(erro)
      );
  }

  ngOnInit() {
  }

}
