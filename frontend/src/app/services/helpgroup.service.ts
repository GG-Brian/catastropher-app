import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Helpgroup } from '../models/helpgroup';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})

export class HelpgroupService {

  endpoint: string = "http://localhost:8080/group"

  constructor(private httpClient: HttpClient) { }

  getGroups(): Observable<Helpgroup[]>{
    return this.httpClient.get<Helpgroup[]>(this.endpoint);
  }

  getGroupById(id: number): Observable<Helpgroup>{
    return this.httpClient.get<Helpgroup>(this.endpoint + "/" + id);
  }

  createGroup(newGroup: Helpgroup): Observable<Helpgroup>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("task", newGroup.task);
    bodyEncoded.append("place", newGroup.place);
    bodyEncoded.append("creation", newGroup.creation.toString());
    const body = bodyEncoded.toString();

    console.log("creation of a new HelpGroup");
    console.log(JSON.stringify(newGroup));
    return this.httpClient.post<Helpgroup>(this.endpoint, body, httpOptionsUsingUrlEncoded);
  }

  updateGroup(groupId: number, newTask: string, newPlace: string, newCreation: string){
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("id", groupId.toString());
    bodyEncoded.append("task", newTask);
    bodyEncoded.append("place", newPlace);
    bodyEncoded.append("creation", newCreation);

    const body = bodyEncoded.toString();

    console.log("updation of the HelpGroup; " + body);
    return this.httpClient.put<Helpgroup>(this.endpoint + "/" + groupId, body, httpOptionsUsingUrlEncoded);
  }

  deleteGroup(groupId: number): Observable<Helpgroup>{
    return this.httpClient.delete<Helpgroup>(this.endpoint + "/" + groupId);
  }

}