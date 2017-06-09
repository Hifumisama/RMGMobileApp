import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArcadePage } from './arcade';

@NgModule({
  declarations: [
    ArcadePage,
  ],
  imports: [
    IonicPageModule.forChild(ArcadePage),
  ],
  exports: [
    ArcadePage
  ]
})
export class ArcadePageModule {}
