import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JavascriptLoaderService {

  constructor() { }

  LoadMeetUsFiles (files: string [] ){
    for (let file of files){
      let script = document.createElement("script");
      script.src = "./assets/us-view/JavaScript" + file + ".js";
      let body = document.getElementsByTagName("ion-content")[0];
      body.appendChild(script);
    }
  }
}
