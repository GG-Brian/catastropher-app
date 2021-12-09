import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JavascriptLoaderService {

  constructor() { }

  LoadMeetUsFiles (files: string [] ){
    for (let file of files){
      let scriptObject = document.createElement("script");
      scriptObject.src = "./assets/JavaScript/" + file + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(scriptObject);
    }
  }

  LoadDatabaseRelationFiles (files: string [] ){
    for (let file of files){
      let scriptObject = document.createElement("script");
      scriptObject.src = "./assets/JavaScript/" + file + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(scriptObject);
    }
  }
  
}