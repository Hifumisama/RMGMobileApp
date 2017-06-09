import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DdrPage } from './ddr';

@NgModule({
  declarations: [
    DdrPage,
  ],
  imports: [
    IonicPageModule.forChild(DdrPage),
  ],
  exports: [
    DdrPage
  ]
})
export class DdrPageModule {}
