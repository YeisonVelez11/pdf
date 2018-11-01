import { Http, Headers, RequestOptions } from "@angular/http";
import { URL_SERVICIOS } from "../../config/url.servicios";
import { ToastController, LoadingController, Platform } from "ionic-angular";
import { MESSAGES } from "../../config/messages";
import { Injectable } from "@angular/core";
import { Events } from 'ionic-angular';
import { DatePipe } from '@angular/common';

@Injectable()
export class ServicesProvider {
  timeOut: any;
  timeOutControl: boolean = true;
  loading: any;
  headers: Headers;
  headersExternal: Headers;
  urlApi: string = URL_SERVICIOS;
  options: RequestOptions;
  optionsExternal: RequestOptions;
  /*token: any;*/
  oToast:any;
  //token =  JSON.parse(localStorage.getItem("user"));
  so: any;

  constructor(
    public http: Http,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public events: Events,
    public platform: Platform,
    private datePipe: DatePipe
  ) {}


  getDateNow(type){
    let date = new Date();
    if(type=="date"){
        return this.datePipe.transform(date,"yyyy/MM/dd")
    }
    else{
        return this.datePipe.transform(date,"yyyy/MM/dd hh:mm:ss")
    }
  }


createHeaders(){
  /*if(localStorage.getItem("token")!= null)
  {
    this.token = localStorage.getItem("token");
  }*/
  this.headers = new Headers(
  {
  'Content-Type' : 'application/json',
    //'Content-Type' : 'multipart/form-data',
    //'Content-Type': undefined,
    //'x-api-key': this.token
  });
  this.headersExternal = new Headers(
  {
  'Content-Type' : 'application/json',
    //'Accept' : 'application/json',
  //'Content-Type' : 'multipart/form-data'
  //'Access-Control-Allow-Origin':'*',
  //'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Access-Control-Allow-Origin'
  });
  this.options = new RequestOptions({ headers: this.headers });
  this.optionsExternal = new RequestOptions({ headers: this.headersExternal });
}
/**
 * 
   * Función para Crear el toast de información
   * @param  {}
   * @return  {}
   */
  toast(mensaje: string, toastClass: string = "errorToast") {

    try {
        this.oToast.dismiss();
    } catch(e) {}

    this.oToast = this.toastCtrl.create({
      message: mensaje,
      duration: 4000,
      position: "bottom",
      cssClass: toastClass,
      showCloseButton: true,
      closeButtonText: "X"
    });
     this.oToast.present();
  }

  /**
   * Función para Crear el loader de espera
   * @param  {}
   * @return  {}
   */
  createLoader(message: string = MESSAGES.loading.message) {
    if(!this.loading){
      this.loading = this.loadingCtrl.create({
        content: message
      });
      this.loading.present();
    }
  }
  closeLoader() {
    if(this.loading){
        this.loading.dismiss();
        this.loading = null;
    }
  }

 



  apiGet( params: any, url: string) {
    this.createHeaders();    
    return new Promise((resolve, reject) => {
      this.http.get(this.urlApi + url + params, this.options).subscribe(
        res => {
          resolve(res);
        },
        err => {
          if(err["status"] == 401)
          {
            //this.logOut();
          }
          resolve(err);
        }
      );
    });
  }

  /**
   * Función para peticiones a la API por el método POST
   * @param  {}
   * @return  {}
   */
  apiPost(formData: any, url: string) {
    this.createHeaders();

    return new Promise((resolve, reject) => {
      this.http.post(this.urlApi + url, formData, this.options).subscribe(
        res => {
          resolve(res);
        },
        err => {          
          if(err["status"] == 401)
          {
            //this.logOut();
          }
          resolve(err);
        }
      );
    });
  }

  apiPostExternalUrl(formData: any, url: string) {
    this.createHeaders();
    return new Promise((resolve, reject) => {
      this.http.post(this.urlApi + url, formData, this.optionsExternal).subscribe(
        res => {
          resolve(res);
        },
        err => {
          if(err["status"] == 401)
          {
           // this.logOut();
          }
          resolve(err);
        }
      );
    });
  }
  apiGetExternalUrl(formData: any, url: string) {
    //this.createHeaders();
    return new Promise((resolve, reject) => {
      this.http.get(this.urlApi + url, formData).subscribe(
        res => {
          resolve(res);
        },
        err => {
          if(err["status"] == 401)
          {
            //this.logOut();
          }
          resolve(err);
        }
      );
    });
  }

  validate_so_v()
  {
    if (this.platform.is('android'))
    {
      this.so = this.platform.versions();
      console.log("platform.versions() = ", this.platform.versions());    
      console.log("platform.versions.android.str() = ", this.so.android.str); 
      if (this.so.android.str > 4.4)
      {       
        console.log("-- Android versión = " + this.so.android.str + " es mayor a 4.4")      
        return true;
      }
      else
      {
        console.log("-- Android igual o menor a 4.4 = " + this.so.android.str);
        return false;
      }      
    }
    else
    {
      return true;
    }
  }

}
