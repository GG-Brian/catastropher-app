import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disaster } from '../models/disaster';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})

export class DisasterService {

  endpoint: string = "http://localhost:8080/disaster"

  constructor(private httpClient: HttpClient) { }

  getDisasters(): Observable<Disaster[]>{ return this.httpClient.get<Disaster[]>(this.endpoint); }

  getDisasterById(id: number): Observable<Disaster>{ return this.httpClient.get<Disaster>(this.endpoint + "/" + id); }

  createDisaster(newDisaster: Disaster): Observable<Disaster>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", newDisaster.name);
    bodyEncoded.append("type", newDisaster.type);
    bodyEncoded.append("origin", newDisaster.origin);
    bodyEncoded.append("area", newDisaster.area.toString());
    bodyEncoded.append("injured", newDisaster.injured.toString());
    bodyEncoded.append("deceased", newDisaster.deceased.toString());
    bodyEncoded.append("time", newDisaster.time);
    const body = bodyEncoded.toString();

    console.log("creation of a new Disaster");
    console.log(JSON.stringify(newDisaster));
    return this.httpClient.post<Disaster>(this.endpoint, body, httpOptionsUsingUrlEncoded);
  }

  updateDisaster(disasterId: number, newName: string, newType: string, newOrigin: string, newArea: number, newInjured: number, newDeceased: number, newTime: string){
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("id", disasterId.toString());
    bodyEncoded.append("name", newName);
    bodyEncoded.append("type", newType);
    bodyEncoded.append("origin", newOrigin);
    bodyEncoded.append("area", newArea.toString());
    bodyEncoded.append("injured", newInjured.toString());
    bodyEncoded.append("deceased", newDeceased.toString());
    bodyEncoded.append("time", newTime);
    const body = bodyEncoded.toString();

    console.log("updation of the disaster; " + body);
    return this.httpClient.put<Disaster>(this.endpoint + "/" + disasterId, body, httpOptionsUsingUrlEncoded);
  }

  deleteDisaster(disasterId: number): Observable<Disaster>{
    return this.httpClient.delete<Disaster>(this.endpoint + "/" + disasterId);
  }

}