import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  datiUtente= new ReplaySubject();
  apiBaseUrl="api/users";


  constructor(private http:HttpClient) { }

  nuovoUtente(dati:any):Observable<any>{

    return this.http.post<any>(`${this.apiBaseUrl}/signup`,dati);
  }

  getUser(email:string):Observable<any>{
    const user = {
      email:email
    }

    return this.http.post<any>(`${this.apiBaseUrl}/user`,user);
  }
}
