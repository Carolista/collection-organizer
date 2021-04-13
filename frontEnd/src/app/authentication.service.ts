import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user.model'

//these values are specific to firebase; change them to match what spring security/auth0 sends back
interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: string
}

@Injectable({providedIn: 'root'})

export class AuthenticationService {

  user = new Subject<User>()

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAheJfpJIYsQ_2ZanqZLDeAsQr7RA1BKfY',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    ).
    pipe(catchError(errorResponse => {
      let errorMessage = "An error occured! Please try again.";
      if(!errorResponse || !errorResponse.error.error){
        return throwError(errorMessage);
      }
      switch(errorResponse.error.error.message){
        case 'EMAIL_EXISTS': errorMessage = "That email is already registered";
      }
      return throwError(errorMessage);
    }));
  }

  login(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAheJfpJIYsQ_2ZanqZLDeAsQr7RA1BKfY',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
  }
}
