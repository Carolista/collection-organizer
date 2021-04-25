// import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

// import { TokenStorageService } from '../authentication/token-storage.service';
// import { Observable } from 'rxjs';

// const TOKEN_HEADER_KEY = 'Authorization';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   constructor(private token: TokenStorageService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
//     console.log("request passed to interceptor");
//     let authReq = req;
//     console.log(authReq.url);
//     const token = this.token.getToken();

//     if(authReq.url === 'http://localhost:8080/api/item'){
//       console.log("not an authentication request; sent without changes");
//       return next.handle(authReq);
//     } else {
//       if (token != null) {
//         authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer' + token) });
//       }
//       console.log("authentication request; sent with changes");
//       return next.handle(authReq);
//     }
//   }  
// }

// export const authInterceptorProviders = [
//   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
// ];