import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetroPage } from './retro';

@NgModule({
  declarations: [
    RetroPage,
  ],
  imports: [
    IonicPageModule.forChild(RetroPage),
  ],
  exports: [
    RetroPage
  ]
})
export class RetroPageModule {}
