import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';


//import { MESSAGES } from "../../config/messages";


import {
  DocumentPage

} from "../index.paginas";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

HomePage:HomePage;

  constructor(
    public navCtrl: NavController
    ) {
  }

  ionViewDidLoad() {
   
  }


  goToHome(){
    this.navCtrl.setRoot( HomePage );
  }
  goToDocument(){
    this.navCtrl.setRoot( DocumentPage );
  }


}
