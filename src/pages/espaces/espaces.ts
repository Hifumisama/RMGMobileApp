import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { ArcadePage } from '../../pages/arcade/arcade';
import { DdrPage } from '../../pages/ddr/ddr';
import { MangasPage } from '../../pages/mangas/mangas';
import { RetroPage } from '../../pages/retro/retro';
/**
 * Generated class for the EspacesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-espaces',
  templateUrl: 'espaces.html',
})
export class EspacesPage {
  title="Les Espaces"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EspacesPage');
  }

  // Routage vers les différentes pages

  linkMangas() {
    this.navCtrl.push(MangasPage);
  }
  linkDDR() {
    this.navCtrl.push(DdrPage);
  }
  linkArcade() {
    this.navCtrl.push(ArcadePage);
  }
  linkRetro() {
    this.navCtrl.push(RetroPage);
  }

  linkBack() {
    this.navCtrl.pop();
  }
  
  toRoot() {
    this.navCtrl.push(HomePage);
  }
}
