import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supporter } from '../models/supporter';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptionsUsingUrlEncoded = {
  Headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})

export class SupporterService {

  endpoint: string = "http://localhost:8080/supporters"

  constructor(private httpClient: HttpClient) { }

  getSupporters(): Observable<Supporter[]>{
    return this.httpClient.get<Supporter[]>(this.endpoint);
  }

  getSupportersById(dni: string): Observable<Supporter>{
    return this.httpClient.get<Supporter>(this.endpoint + "/" + dni);
  }

  createSupporter(newSupporter: Supporter): Observable<Supporter>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("dni", newSupporter.dni);
    bodyEncoded.append("name", newSupporter.name);
    bodyEncoded.append("age", newSupporter.age.toString());
    bodyEncoded.append("salary", newSupporter.salary.toString());
    bodyEncoded.append("since", newSupporter.since);
    bodyEncoded.append("groupId", newSupporter.groupId.toString());
    const body = bodyEncoded.toString();

    console.log("creation of a new Supporter");
    console.log(JSON.stringify(newSupporter));
    return null;
    //return this.httpClient.post<Supporter>(this.endpoint, body, httpOptionsUsingUrlEncoded);
  }

  updateSupporter(SupporterDni: string, newName: string, newAge: number, newSalary: number, newSince: string, newGroupId: number){
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("dni", SupporterDni);
    bodyEncoded.append("name", newName);
    bodyEncoded.append("age", newAge.toString());
    bodyEncoded.append("salary", newSalary.toString());
    bodyEncoded.append("since", newSince);
    bodyEncoded.append("groupId", newGroupId.toString());
    const body = bodyEncoded.toString();

    console.log("updating of the Supporter; " + body);
    return null;
    //return this.httpClient.put<Supporter>(this.endpoint + "/" + SupporterDni, body, httpOptionsUsingUrlEncoded);
  }

  deleteSupporter(SupporterDni: string): Observable<Supporter>{
    return this.httpClient.delete<Supporter>(this.endpoint + "/" + SupporterDni);
  }

}