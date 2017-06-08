import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EspacesPage } from "../espaces/espaces";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 title = "Page d'accueil";
  constructor(public navCtrl: NavController) {}
  // Nomenclature décidée : On écrit Link, suivi du nom de la vue
  // cible
  linkEspaces(){
    this.navCtrl.push(EspacesPage);
  }

}
