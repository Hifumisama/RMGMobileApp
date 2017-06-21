import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';
import { InfosPratiquesPage } from './infos-pratiques';

@NgModule({
  declarations: [
    InfosPratiquesPage,
  ],
  imports: [
    IonicPageModule.forChild(InfosPratiquesPage),
  ],
  exports: [
    InfosPratiquesPage
  ]
})
export class InfosPratiquesPageModule {}
