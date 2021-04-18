import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model'
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

//these values are specific to firebase; change them to match what spring security/auth0 sends back
export interface AuthResponseData {
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

  user = new Subject<User>();
  isAuthenticated: boolean = false

  constructor(private http: HttpClient, private router: Router) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>('http://localhost:8080/auth/register/',
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
    return this.http.post<AuthResponseData>('http://localhost:8080/auth/',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ). 
    //can combine this and similar method in signup into private method
    pipe(catchError(errorResponse => {
      let errorMessage = "An error occured! Please try again.";
      if(!errorResponse || !errorResponse.error.error){
        return throwError(errorMessage);
      }
      switch(errorResponse.error.error.message){
        case 'EMAIL_EXISTS': errorMessage = "That email is already registered";
      }
      return throwError(errorMessage);
    }),
      tap(resData =>{
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          resData.expiresIn,
        )
      })
    );
  }

  logout(){
    this.user.next(null);
    this.router.navigate(['/home'])
  }

  //may need to add userId to parameters; find out how to make that work with resData properties
  handleAuthentication(email: string, password: string, token: string, tokenExpiration: string){
    const user = new User(email, password, token, tokenExpiration);
    this.user.next(user);
    //need to figure out how to switch this back to false when user logs out
    this.isAuthenticated = true;
    localStorage.setItem('userData', JSON.stringify(user));
  }

  autoLogin() {
    const userData: {
      email: string,
      id: string,
      token: string,
      tokenExpirationDate: string,
    } = JSON.parse(localStorage.getItem("userData"));
    if(!userData) {
      return;
    } 
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData.token,
      userData.tokenExpirationDate
    );

    if(loadedUser.token) {
      this.user.next(loadedUser);
    }
  }
  
}
