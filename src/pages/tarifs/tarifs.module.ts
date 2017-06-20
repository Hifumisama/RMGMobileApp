import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TarifsPage } from './tarifs';

@NgModule({
  declarations: [
    TarifsPage,
  ],
  imports: [
    IonicPageModule.forChild(TarifsPage),
  ],
  exports: [
    TarifsPage
  ]
})
export class TarifsPageModule {}
