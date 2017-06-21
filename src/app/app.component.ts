import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController, MenuController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { EspacesPage } from "../pages/espaces/espaces";
import { TarifsPage } from "../pages/tarifs/tarifs";
import { InfosPratiquesPage } from "../pages/infos-pratiques/infos-pratiques";
import { ContactPage } from "../pages/contact/contact";

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild('mycontent') nav: NavController;
  rootPage:any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  linkEspaces(){
    this.nav.push(EspacesPage);
    this.menu.close();
  }
  linkTarifs(){
    this.nav.push(TarifsPage);
    this.menu.close();
  }
  linkInfosPratiques(){
    this.nav.push(InfosPratiquesPage);
    this.menu.close();
  }
  linkContact(){
    this.nav.push(ContactPage);
    this.menu.close();
  }
}
