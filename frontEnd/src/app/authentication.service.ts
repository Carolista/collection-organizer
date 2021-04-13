import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//these values are specific to firebase; change them to match what spring security/auth0 sends back
interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}

@Injectable({providedIn: 'root'})

export class AuthenticationService {
  
  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAheJfpJIYsQ_2ZanqZLDeAsQr7RA1BKfY',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
