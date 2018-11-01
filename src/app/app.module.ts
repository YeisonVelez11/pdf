import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { BrowserAnimationsModule  } from '@angular/platform-browser/animations'; // <-- import required BrowserAnimationsModule
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { MyApp } from './app.component';
import { DatePipe } from '@angular/common'


import {
  DocumentPage,
  HomePage
  } from "../pages/index.paginas";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ServicesProvider } from '../providers/services/services';
//import { DatabaseService } from '../providers/services/database-service';
//en los pages
//import { MESSAGES } from "../../config/messages";
//import { SERVICES } from "../../config/url.servicios";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DocumentPage 

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    HttpModule,
    PdfViewerModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DocumentPage
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServicesProvider,
    DatePipe,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
