import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';
import { PedidoPage } from '../pedido/pedido.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  fazerPedido(){
    this.navCtrl.push(PedidoPage);
  }

}
