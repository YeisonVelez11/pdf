import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SERVICES } from "../config/url.servicios";
import { ServicesProvider } from "../providers/services/services";
import { InAppBrowser } from '@ionic-native/in-app-browser';

import {

  DocumentPage,
  HomePage
  } from "../pages/index.paginas";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,private SplashScreen:SplashScreen, public statusBar: StatusBar,public menuCtrl: MenuController,private ServicesProvider:ServicesProvider,private iab: InAppBrowser) {
    this.initializeApp();

  }

  goToHome(){
    this.menuCtrl.close();
    this.nav.setRoot( HomePage );
    console.log("home")

  }
  goToDocument(){
    this.menuCtrl.close();
    console.log("docuemnto")
    this.nav.setRoot( DocumentPage );
  }



  initializeApp() {

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if(this.platform.is('cordova')){
        //this.ScreenOrientation.lock(this.ScreenOrientation.ORIENTATIONS.PORTRAIT  );
      }

      this.statusBar.styleDefault();

      //this.nav.setRoot(FactoresPage);

      this.SplashScreen.hide();
    });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    //this.nav.setRoot(AseguramientoCalidadPage);
  }
}
