import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supporter } from '../models/supporter';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// This gives error 'Observable<ArrayBuffer not assignable to Observable<Supporter>'
// const httpOptionsUsingUrlEncoded = {
//   Headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
// };

// However, this doesn't, and I cannot see the difference (taking me about 2 days of work)
const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})

export class SupporterService {

  endpoint: string = "http://localhost:8080/supporter"

  constructor(private httpClient: HttpClient) { }

  getSupporters(): Observable<Supporter[]>{
    return this.httpClient.get<Supporter[]>(this.endpoint);
  }

  getSupporterById(dni: string): Observable<Supporter>{
    return this.httpClient.get<Supporter>(this.endpoint + "/" + dni);
  }

  createSupporter(newSupporter: Supporter): Observable<Supporter>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("dni", newSupporter.dni);
    bodyEncoded.append("name", newSupporter.name);
    bodyEncoded.append("age", newSupporter.age.toString());
    bodyEncoded.append("date", newSupporter.date);
    if (newSupporter.thegroup == null) { bodyEncoded.append("thegroup", "") } else { bodyEncoded.append("thegroup", newSupporter.thegroup.toString()); }
    const body = bodyEncoded.toString();

    console.log("creation of a new Supporter");
    console.log(JSON.stringify(newSupporter));
    return this.httpClient.post<Supporter>(this.endpoint, body, httpOptionsUsingUrlEncoded);
  }

  updateSupporter(SupporterDni: string, newName: string, newAge: number, newDate: string, newThegroup: number){
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("dni", SupporterDni);
    bodyEncoded.append("name", newName);
    bodyEncoded.append("age", newAge.toString());
    bodyEncoded.append("date", newDate);
    if (newThegroup == null) { bodyEncoded.append("thegroup", "") } else { bodyEncoded.append("thegroup", newThegroup.toString()); }
    const body = bodyEncoded.toString();

    console.log("updating of the Supporter; " + body);
    return this.httpClient.put<Supporter>(this.endpoint + "/" + SupporterDni, body, httpOptionsUsingUrlEncoded);
  }

  deleteSupporter(SupporterDni: string): Observable<Supporter>{
    return this.httpClient.delete<Supporter>(this.endpoint + "/" + SupporterDni);
  }

}