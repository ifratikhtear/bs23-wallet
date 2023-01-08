import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  testLoading() {
    return this.http.get('https://mocki.io/v1/55a0cf65-8123-446c-bdd1-9eeb4607b451');
  }

  logOut() : void {
    console.log("logging out");
  }
}
