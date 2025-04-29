import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private _router: Router) { }

  login(email: string, password: string) {
    console.log(email, password, 'creds');
    this._router.navigate(['layout/']);
  }

  isAuthenticated(): boolean {
    return true;
  }
}
