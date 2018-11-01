import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  HomePage

  } from "../index.paginas";


/**
 * Generated class for the DocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-document',
  templateUrl: 'document.html',
})
export class DocumentPage {
archivo_adjunto:string;

  constructor(public navCtrl: NavController, public navParams: NavParams
    ) {
  }

  goToHome(){
    this.navCtrl.setRoot( HomePage );
  }
  goToDocument(){
    this.navCtrl.setRoot( DocumentPage );
  }


  ionViewDidLoad() {
        this.archivo_adjunto="./assets/documents/Resumen Ejecutivo Autoevaluacion.pdf"

  }

  pageRendered(e: CustomEvent) {

  }


}
