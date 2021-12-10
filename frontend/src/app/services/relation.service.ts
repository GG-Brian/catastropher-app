import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Relation } from '../models/relation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})

export class RelationService {

  endpoint: string = "http://localhost:8080/disasters/groups"

  constructor(private httpClient: HttpClient) { }

  getRelations(changeOrder: boolean): Observable<Relation[]>{
    return this.httpClient.get<Relation[]>(this.endpoint + "/" + changeOrder);
  }

  getRelationByIds(disasterId: number, groupId: number): Observable<Relation>{
    return this.httpClient.get<Relation>(this.endpoint + "/" + disasterId + "/" + groupId);
  }

  createRelation(newRelation: Relation): Observable<Relation>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("disasterId", newRelation.disasterId.toString());
    bodyEncoded.append("groupdId", newRelation.groupId.toString());
    const body = bodyEncoded.toString();

    console.log("creation of a new Relation");
    console.log(JSON.stringify(newRelation));
    return this.httpClient.post<Relation>(this.endpoint + "/" + newRelation.disasterId + "/" + newRelation.groupId, body, httpOptionsUsingUrlEncoded);
  }

  updateRelation(disasterId: number, groupId: number){
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("disasterId", disasterId.toString());
    bodyEncoded.append("groupId", groupId.toString());
    const body = bodyEncoded.toString();

    console.log("updation of the Relation; " + body);
    return this.httpClient.put<Relation>(this.endpoint + "/" + disasterId + "/" + groupId, body, httpOptionsUsingUrlEncoded);
  }

  deleteRelation(disasterId: number, groupId: number): Observable<Relation>{
    return this.httpClient.delete<Relation>(this.endpoint + "/" + disasterId + "/" + groupId);
  }

}