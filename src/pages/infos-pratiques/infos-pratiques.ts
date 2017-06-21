import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;
/**
 * Generated class for the InfosPratiquesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-infos-pratiques',
  templateUrl: 'infos-pratiques.html',
})
export class InfosPratiquesPage {
  @ViewChild('map') mapElement: ElementRef;

  title = "Infos Pratiques";
  map: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) { }
  /* Dès que la vue a été chargée, alors je démarre
  la logique d'affichage de la carte*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad InfosPratiquesPage');
    this.loadMap();
    this.addMarker();
  }

  loadMap() {
    /**/
    let latLng = new google.maps.LatLng(48.849338, 2.397649);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let content = "<h4>Retro Man Games </h4><p> Salle d'arcade parisienne</p>";
    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  linkBack() {
    this.navCtrl.pop();
  }

}
