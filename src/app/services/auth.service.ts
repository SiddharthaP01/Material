import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private _registerUrl = "http://reqres.in/api/register";
  private _loginUrl = "https://reqres.in/api/login";

  constructor(private http: HttpClient, private _router: Router) { }
  registerUser(user:any) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
