import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Disaster } from '../models/disaster';
import { Helpgroup } from '../models/helpgroup';
import { Relation } from '../models/relation';
import { Supporter } from '../models/supporter';

@Injectable({
  providedIn: 'root'
})
export class UserpermissionsService {

  private baseUrl = 'http://localhost:8080';
  private user = "";
  private password = "";

  constructor(public http: HttpClient) { }

  public setOptions(username: string, pass: string){
    this.user = username;
    this.password = pass
  }

  public getUserName(){ return this.user; }

  private getOptions(){
    let base64UserAndPasswordJuan = window.btoa(this.user + ":" + this.password);
    let basico = 'basic ' + base64UserAndPasswordJuan;

    let options = {
      headers: {
        //'Access-Control-Allow-Origin' : 'http://localhost:8100',
        'Authorization' : basico,
        'Content-Type' : 'application/x-www-form-urlencoded',
      }
      //, withCredentials: true
    };
    return options;
  }






  public getDisasters(): Observable<any> {
    // public getDisasters() {

    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/disaster', options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public getDisasterById(id: number): Observable<any> {
    
    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/disaster/' + id, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public createDisaster(newDisaster: Disaster): Observable<any> {
    
    let options = this.getOptions();

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('type', newDisaster.type);
    urlSearchParams.append('origin', newDisaster.origin);
    urlSearchParams.append('area', newDisaster.area.toString());
    urlSearchParams.append('injured', newDisaster.injured.toString());
    urlSearchParams.append('deceased', newDisaster.deceased.toString());
    urlSearchParams.append('time', newDisaster.time);
    let body = urlSearchParams.toString();

    return this.http.post(this.baseUrl + '/disaster', body, options).pipe(
      catchError(this.handleError)
    );
  }

  public updateDisaster(disasterId: number, newType: string, newOrigin: string, newArea: number, newInjured: number, newDeceased: number, newTime: string): Observable<any> {
    
    let options = this.getOptions();
    
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('id', disasterId.toString());
    urlSearchParams.append('type', newType);
    urlSearchParams.append('origin', newOrigin);
    urlSearchParams.append('area', newArea.toString());
    urlSearchParams.append('injured', newInjured.toString());
    urlSearchParams.append('deceased', newDeceased.toString());
    urlSearchParams.append('time', newTime);
    let body = urlSearchParams.toString();

    return this.http.put(this.baseUrl + '/person/' + disasterId, body, options).pipe(
      catchError(this.handleError)
    );
  }

  public deleteDisaster(disasterId: number) {
    
    let options = this.getOptions();

    return this.http.delete(this.baseUrl + '/person/' + disasterId, options).pipe(
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res;
    console.log(JSON.stringify(body));
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }









  public getGroups(): Observable<any> {

    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/group', options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public getGroupById(id: number): Observable<any> {
    
    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/group/' + id, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public createGroup(newGroup: Helpgroup): Observable<any> {
    
    let options = this.getOptions();

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('task', newGroup.task);
    urlSearchParams.append('place', newGroup.place);
    urlSearchParams.append('creation', newGroup.creation.toString());
    let body = urlSearchParams.toString();

    return this.http.post(this.baseUrl + '/group', body, options).pipe(
      catchError(this.handleError)
    );
  }

  public updateGroup(groupId: number, newTask: string, newPlace: string, newCreation: string): Observable<any> {
    
    let options = this.getOptions();
    
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('id', groupId.toString());
    urlSearchParams.append('type', newTask);
    urlSearchParams.append('origin', newPlace);
    urlSearchParams.append('area', newCreation.toString());
    let body = urlSearchParams.toString();

    return this.http.put(this.baseUrl + '/group/' + groupId, body, options).pipe(
      catchError(this.handleError)
    );
  }

  public deleteGroup(groupId: number) {
    
    let options = this.getOptions();

    return this.http.delete(this.baseUrl + '/group/' + groupId, options).pipe(
      catchError(this.handleError)
    );
  }







  public getRelations(changeOrder: boolean): Observable<any> {

    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/disasters/groups/' + changeOrder, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public getRelationsByIds(disasterId: number, groupId: number): Observable<any> {
    
    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/disasters/groups/' + disasterId + '/' + groupId, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public createRelation(newRelation: Relation): Observable<any> {
    
    let options = this.getOptions();

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('disasterId', newRelation.disasterId.toString());
    urlSearchParams.append('groupId', newRelation.groupId.toString());
    let body = urlSearchParams.toString();

    return this.http.post(this.baseUrl + '/disasters/groups/', body, options).pipe(
      catchError(this.handleError)
    );
  }

  public updateRelation(disasterId: number, groupId: number): Observable<any> {
    
    let options = this.getOptions();
    
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('disasterId', disasterId.toString());
    urlSearchParams.append('groupId', groupId.toString());
    let body = urlSearchParams.toString();

    return this.http.put(this.baseUrl + '/disasters/groups/' + disasterId + '/' + groupId, body, options).pipe(
      catchError(this.handleError)
    );
  }

  public deleteRelation(disasterId: number, groupId: number) {
    
    let options = this.getOptions();

    return this.http.delete(this.baseUrl + '/disasters/groups/' + disasterId + '/' + groupId, options).pipe(
      catchError(this.handleError)
    );
  }








  public getSupporters(): Observable<any> {

    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/supporter', options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public getSupporterById(dni: string): Observable<any> {
    
    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/supporter/' + dni, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public createSupporter(newSupporter: Supporter): Observable<any> {
    
    let options = this.getOptions();

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('dni', newSupporter.dni);
    urlSearchParams.append('name', newSupporter.name);
    urlSearchParams.append('age', newSupporter.age.toString());
    urlSearchParams.append('date', newSupporter.date);
    if (newSupporter.thegroup == null) { urlSearchParams.append("thegroup", "") } else ( urlSearchParams.append("thegroup", newSupporter.thegroup.toString()) )
    let body = urlSearchParams.toString();

    return this.http.post(this.baseUrl + '/supporter', body, options).pipe(
      catchError(this.handleError)
    );
  }

  public updateSupporter(SupporterDni: string, newName: string, newAge: number, newDate: string, newThegroup: number): Observable<any> {
    
    let options = this.getOptions();
    
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('dni', SupporterDni.toString());
    urlSearchParams.append('name', newName);
    urlSearchParams.append('age', newAge.toString());
    urlSearchParams.append('date', newDate.toString());
    if (newThegroup == null) { urlSearchParams.append("thegroup", "") } else ( urlSearchParams.append("thegroup", newThegroup.toString()) )
    let body = urlSearchParams.toString();

    return this.http.put(this.baseUrl + '/supporter/' + SupporterDni, body, options).pipe(
      catchError(this.handleError)
    );
  }

  public deleteSupporter(SupporterDni: number) {
    
    let options = this.getOptions();

    return this.http.delete(this.baseUrl + '/supporter/' + SupporterDni, options).pipe(
      catchError(this.handleError)
    );
  }

  

}