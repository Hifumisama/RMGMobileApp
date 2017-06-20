import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TarifsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tarifs',
  templateUrl: 'tarifs.html',
})
export class TarifsPage {
  title = "Tarifs";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarifsPage');
  }
  
  linkBack() {
    this.navCtrl.pop();
  }
}
