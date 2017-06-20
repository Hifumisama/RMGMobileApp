import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EspacesPage } from '../pages/espaces/espaces';
import { ArcadePage } from '../pages/arcade/arcade';
import { DdrPage } from '../pages/ddr/ddr';
import { MangasPage } from '../pages/mangas/mangas';
import { RetroPage } from '../pages/retro/retro';
import { TarifsPage } from '../pages/tarifs/tarifs';
import { InfosPratiquesPage } from "../pages/infos-pratiques/infos-pratiques";
import { ContactPage } from "../pages/contact/contact";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EspacesPage,
    ArcadePage,
    DdrPage,
    MangasPage,
    RetroPage,
    TarifsPage,
    InfosPratiquesPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EspacesPage,
    ArcadePage,
    DdrPage,
    MangasPage,
    RetroPage,
    TarifsPage,
    InfosPratiquesPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
